import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SearchBar() {
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
  return (
    <div>
      <input
        className="input-container"
        type="text"
        placeholder="Rechercher votre film ..."
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
