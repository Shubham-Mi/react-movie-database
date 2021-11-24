import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar({ setInputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">
        <Link to={`/`}>
          <strong>Movie DB</strong>
        </Link>
      </span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={search}
        type="text"
        placeholder="Search movies..."
        title="Search movies"
        className="search-bar"
      />
    </div>
  );
}
