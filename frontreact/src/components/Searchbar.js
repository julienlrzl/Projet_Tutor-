import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (searchText.length >= 3) {
      fetchMovies(searchText);
    } else {
      setFilteredData([]);
    }

    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setFilteredData([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchText]);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://localhost:7286/api/Movie/ByTitle/${query}`);
      setFilteredData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push("/Summary");
    }
  };

  const handleLinkClick = (imdbId) => {
    Cookies.set('lastSelectedMovieId', imdbId, { expires: 7 });
  };

  const clearFilter = () => {
    setSearchText("");
    setFilteredData([]);
  }

  return (
    <div ref={wrapperRef}>
      <div className="search">
        <div className="searchInputs">
          <input
            className="input-container"
            type="text"
            placeholder="Rechercher votre film ..."
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon id="searchWord" />
            ) : (
              <CloseIcon id="clearBar" onClick={clearFilter} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 10).map((value, key) => {
              return (
                <Link to={`/Summary`} className="dataList" onClick={() => handleLinkClick(value.imdbId)}>
                  <p>{value.title}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
