import React from "react";
import "../styles/movie-card.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  if (movie.Type === "movie") {
    return (
      <Link to={`/movie-list/${movie.imdbID}`}>
        <div className="movie-card" title={movie.Title}>
          <img className="image" src={movie.Poster} alt={movie.Title} />
          <div className="movie-card-content">
            <h2>{movie.Title}</h2>
          </div>
        </div>
      </Link>
    );
  } else {
    return <></>;
  }
}
