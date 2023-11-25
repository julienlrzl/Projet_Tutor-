import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({data}) {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const history = useHistory();

  const handleInputChange = (e) => {
    const searchedValue = e.target.value.replace(/[^\w\s]/gi, '').replace(' ', '');
    setSearchText(e.target.value);
    const dataFilter = data.movie.filter((value) => {
      return value.title.toLowerCase().replace(' ', '').includes(searchedValue.toLowerCase());
    })

    if (searchedValue === "") {
      setFilteredData([]);
    } else {
      setFilteredData(dataFilter);
    }
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
            {filteredData.length === 0 ? <SearchIcon id="searchWord"/> : <CloseIcon id="clearBar" onClick={clearFilter}/>}
          </div>
        </div>
        {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0,10).map((value, key) => {
            return (
              <a  className="dataList"
                  href="/Summary"> 
                <p> {value.title}</p>
                </a>
             );
          })}
        </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
