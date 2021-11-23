import { useEffect, useState } from "react";
import "./App.css";
import { NavBar, MovieList, MovieDetails } from "./components";
import axios from "axios";

// https://dribbble.com/shots/5769571-Movie-Database-Dashboard/attachments/1244719?mode=media
const API_BASE_URL = "http://www.omdbapi.com";
// &apikey=52c3929

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [details, setDetails] = useState({});
  const [detailsVisible, setDetailsVisible] = useState(false);

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      await axios
        .get(`${API_BASE_URL}/?s=${inputValue}&apikey=52c3929`)
        .then((res) => {
          setMovies(res.data.Search);
        });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      await axios
        .get(`${API_BASE_URL}/?s=batman&apikey=52c3929`)
        .then((res) => {
          setMovies(res.data.Search);
        });
    })();
    setIsLoading(false);
  }, []);

  return (
    <div className="main">
      <NavBar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <MovieList
        movies={movies}
        isLoading={isLoading}
        setDetails={setDetails}
        setDetailsVisible={setDetailsVisible}
      />

      <MovieDetails
        setDetailsVisible={setDetailsVisible}
        detailsVisible={detailsVisible}
        details={details}
      />
    </div>
  );
}

export default App;
