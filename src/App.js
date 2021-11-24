import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import About from "./pages/About";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

// https://dribbble.com/shots/5769571-Movie-Database-Dashboard/attachments/1244719?mode=media
const API_BASE_URL = "http://www.omdbapi.com";
// &apikey=52c3929

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
      <Router>
        <NavBar search={search} setInputValue={setInputValue} />
        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} isLoading={isLoading} />}
          />
          <Route path="/movie-list/:id" element={<MovieDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
