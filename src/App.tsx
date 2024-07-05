import "../main.css";

import { FC } from "react";

import { MovieShelf } from "@/movie-shelf";
import { AppProvider } from "@/providers/app";

export const App: FC = () => {
  return (
    <AppProvider>
      <MovieShelf />
    </AppProvider>
  );
};
