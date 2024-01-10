import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (searchText.length >= 3) { 
      fetchMovies(searchText);
    } else {
      setFilteredData([]);
    }
  }, [searchText]);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      // Utilisez l'URL avec votre terme de recherche
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
      // L'utilisateur a appuyé sur la touche Entrée, effectuez la recherche et redirigez vers la page Summary.
      // Vous pouvez également ajouter ici une logique de recherche si nécessaire.
      history.push("/Summary");
    }
  };

  const clearFilter = () => {
    setSearchText("");
    setFilteredData([]);
  }

  return (
    <div>
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
                // Utilisez Link pour la navigation
                <Link to={`/Summary/${value.imdbId}`} className="dataList">
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
