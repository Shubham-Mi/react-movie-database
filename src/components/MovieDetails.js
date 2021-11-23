import React from "react";
import "../styles/movie-details.css";

export default function MovieDetails({
  details,
  detailsVisible,
  setDetailsVisible,
}) {
  const closeDetails = () => {
    setDetailsVisible(false);
  };

  if (detailsVisible === false) {
    return <></>;
  }
  return (
    <div className="movie-details">
      <div className="row">
        <img className="image-desc" src={details.Poster} alt={details.Title} />
        <div className="movie-details-content">
          <h2>{details.Title}</h2>
          <h4>Year: {details.Year}</h4>
          <h4>Rated: {details.Rated}</h4>
          <h4>Released: {details.Released}</h4>
          <h4>Runtime: {details.Runtime}</h4>
          <h4>Director: {details.Director}</h4>
          <h4>Writer: {details.Writer}</h4>
          <h4>Actors: {details.Actors}</h4>
          <span className="close" onClick={closeDetails}>
            Close
          </span>
        </div>
      </div>

      <div className="movie-description">
        <h4>Genre: {details.Genre}</h4>
        <h4>imdb Rating: {details.imdbRating}</h4>
        <h4>Language: {details.Language}</h4>
        <h4>Awards: {details.Awards}</h4>
        <h4>Plot: {details.Plot}</h4>
      </div>
    </div>
  );
}
