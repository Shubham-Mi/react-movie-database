import React from "react";
import { MovieList } from "../components";

export default function Movie({
  isLoading,
  movies,
  setDetails,
  setDetailsVisible,
}) {
  return (
    <div>
      <MovieList
        movies={movies}
        isLoading={isLoading}
        setDetails={setDetails}
        setDetailsVisible={setDetailsVisible}
      />
    </div>
  );
}
