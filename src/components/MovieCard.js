import React from "react";
import axios from "axios";
import "../styles/movie-card.css";

const API_BASE_URL = "http://www.omdbapi.com";

export default function MovieCard({ movie, setDetails, setDetailsVisible }) {
  const handleClick = async () => {
    await axios
      .get(`${API_BASE_URL}/?i=${movie.imdbID}&apikey=52c3929`)
      .then((res) => {
        setDetails(res.data);
        setDetailsVisible(true);
      });
  };

  if (movie.Type === "movie") {
    return (
      <div className="movie-card" onClick={handleClick} title={movie.Title}>
        <img className="image" src={movie.Poster} alt={movie.Title} />
        <div className="movie-card-content">
          <h2>{movie.Title}</h2>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
