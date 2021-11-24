import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function MovieDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await axios
        .get(`http://www.omdbapi.com/?i=${id}&apikey=52c3929`)
        .then((res) => {
          console.log(res.data);
          setMovieDetails(res.data);
        });
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="movie-details">
        <div className="row">
          <img
            className="image-desc"
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
          <div className="movie-details-content">
            <h1>{movieDetails.Title}</h1>
            <h4>Year: {movieDetails.Year}</h4>
            <h4>Rated: {movieDetails.Rated}</h4>
            <h4>Released: {movieDetails.Released}</h4>
            <h4>Runtime: {movieDetails.Runtime}</h4>
            <h4>Director: {movieDetails.Director}</h4>
            <h4>Writer: {movieDetails.Writer}</h4>
            <h4>Actors: {movieDetails.Actors}</h4>
            <h4>Genre: {movieDetails.Genre}</h4>
            <h4>imdb Rating: {movieDetails.imdbRating}</h4>
            <h4>Language: {movieDetails.Language}</h4>
            <h4>Awards: {movieDetails.Awards}</h4>
            <h4>Plot: {movieDetails.Plot}</h4>
          </div>
        </div>
      </div>
    );
  }
}
