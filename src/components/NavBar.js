import React from "react";
import "../styles/navbar.css";

export default function NavBar({ setInputValue, inputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">
        <strong>Movie DB</strong>
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
