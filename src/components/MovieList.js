import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movie-list.css";

export default function MovieList({
  isLoading,
  movies,
  setDetails,
  setDetailsVisible,
}) {
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            setDetailsVisible={setDetailsVisible}
            setDetails={setDetails}
            key={index}
            movie={movie}
          />
        ))}
      </div>
    );
  }
}
