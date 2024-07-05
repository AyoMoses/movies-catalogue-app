import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useRef } from "react";

import { axios } from "@/lib/axios";

import { Movies, Filters, Category } from "../types";

type GetMoviesParams = {
  category: Category | undefined;
  filters: Filters;
};

const getMovies = async (
  { category, filters }: GetMoviesParams,
  page: number = 1
): Promise<Movies> => {
  const endpoint = filters.title
    ? `search/movie?query=${filters.title}&page=${page}`
    : `movie/${category}?page=${page}`;

  const { data } = await axios.get<Movies>(
    `${endpoint}&language=en-US&include_adult=false`
  );
  return data;
};

export const useInfiniteMovies = (params: GetMoviesParams) => {
  const observer = useRef<IntersectionObserver>();

  const queryResponse = useInfiniteQuery({
    queryKey: ["movies", params],
    queryFn: ({ pageParam }) => getMovies(params, pageParam),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.page === lastPage.total_pages ? false : pages.length + 1;
    },
    select: (data) => {
      const cummulativePages = data.pages.reduce<Movies>(
        (prev, next) => {
          return {
            ...prev,
            ...next,
            results: prev.results.concat(next.results),
          };
        },
        { page: 1, total_pages: 1, total_results: 1, results: [] }
      );

      return { ...data, pages: [cummulativePages] };
    },
  });

  const { data, hasNextPage, fetchNextPage } = queryResponse;

  const lastElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (!data) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage({
            pageParam: data.pageParams.length + 1,
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [data, fetchNextPage, hasNextPage]
  );

  return {
    ...queryResponse,
    data: data?.pages?.[0].results || [],
    ref: lastElementRef,
  };
};
