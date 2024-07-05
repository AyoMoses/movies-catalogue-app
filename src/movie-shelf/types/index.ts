export type Category = "popular" | "top_rated" | "upcoming";

export type Filters = { title: string };

export type Movie = {
  id: number;
  poster_path: string;
  release_date?: string;
  title: string;
};

export type Movies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
