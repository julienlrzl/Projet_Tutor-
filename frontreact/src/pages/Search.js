import React from "react";
import "../styles/Search.css";
import SearchBar from "../components/Searchbar";
import movie from "../data/movie.json"

function Search() {
  return (
    <div className="Search">
      <div className="headerContainer">
        <h1 className="text">
          A<br />
          WIDE
          <br />
          SELECTION OF <br />
          FILMS
        </h1>
        <br />
        <div>
          <SearchBar data={movie}/>
        </div>
      </div>
    </div>
  );
}

export default Search;
