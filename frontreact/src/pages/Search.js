import React from "react";
import "../styles/Search.css";
import SearchBar from "../components/Searchbar";

function Search() {
  return (
    <div className="Search">
      <div className="headerContainer">
        <h1 class="text">
          A<br />
          WIDE
          <br />
          SELECTION OF <br />
          FILMS
        </h1>
        <br />
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Search;
