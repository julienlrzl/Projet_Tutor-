import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({data}) {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

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

  const handleSearch = (searchTerm) => {
    console.log('test', searchTerm);
  };
  
  return (
    <div>
      <div className="search">
        <div className="searchInputs">
          <input
          className="input-container"
          type="search"
          placeholder="Rechercher votre film ..."
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onSearch={handleSearch}
          />
          <div className="searchIcon"> <SearchIcon /></div>
        </div>
        <div className="dataResult">

          {data.movie.map((value, key) => {
            return (
              <a  className="dataList"
                  href="/Summary"> 
                <p> {value.title}</p>
                </a>
             );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
