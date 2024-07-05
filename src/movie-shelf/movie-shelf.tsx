import { useRef, useState } from "react";
import "intersection-observer"; //pollyfill for intersection observer

import { useInfiniteMovies } from "./api";
import { Filters, Category } from "./types";

import { Movie } from "./components/Movie";
import { Skeleton } from "./components/Skeleton";
import { EmptyState } from "./components/EmptyState";
import { Categories } from "./components/Categories";
import { ShelfFilters } from "./components/ShelfFilters";

const DEFAULT_FILTERS: Filters = { title: "" };

const MovieShelf = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null!);

  const [category, setCategory] = useState<Category>("popular");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const {
    ref,
    data: movies,
    isInitialLoading,
    isFetchingNextPage,
  } = useInfiniteMovies({
    category,
    filters,
  });

  const handleApplyCategory = (category: Category) => {
    setCategory((previousCategory) => {
      return previousCategory === category ? previousCategory : category;
    });
    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApplyFilters = (filter: Partial<Filters>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...filter }));
    scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col lg:flex-row overflow-hidden">
      <aside className="bg-grey-extraLight top-0 p-6 shrink-0 lg:p-9 lg:w-[411px] flex flex-col justify-between">
        <div>
          <h1 className="text-xl text-primary-dark font-extrabold font-sans-extrabold leading-[69.67px]">
            Movie Shelf
          </h1>
          <ShelfFilters onApplyFilter={handleApplyFilters} />
          <Categories
            selectedCategory={category}
            onApplyCategory={handleApplyCategory}
          />
        </div>

        <p className="text-medium text-lg text-grey-medium font-sans-medium leading-[24.59px]">
          {movies.length} movies listed
        </p>
      </aside>

      <main
        ref={scrollContainerRef}
        className="grow p-6 lg:p-9 overflow-y-scroll bg-grey-light h-full"
      >
        {movies.length || isInitialLoading ? (
          <ul className="gap-[23px] justify-center grid grid-cols-shelf lg:gap-9 lg:grid-cols-shelf-lg xl:gap-8 relative">
            {movies.map((movie, index) => {
              const lastElement = movies.length === index + 1;

              return (
                <li
                  tabIndex={0}
                  key={movie.id}
                  ref={lastElement ? ref : undefined}
                  className="w-fit rounded"
                  data-testid={lastElement ? "lastElement" : undefined}
                >
                  <Movie {...movie} />
                </li>
              );
            })}

            {(isFetchingNextPage || isInitialLoading) && (
              <>
                <span className="sr-only">Loading</span>

                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </ul>
        ) : (
          <div className="w-full h-full grid place-items-center">
            <EmptyState />
          </div>
        )}
      </main>
    </div>
  );
};

export { MovieShelf };
