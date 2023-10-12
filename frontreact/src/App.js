import "./App.css"; // Importe les styles CSS pour l'application
import Navbar from "./components/Navbar.js"; // Importe le composant Navbar depuis le fichier Navbar.js
import Home from "./pages/Home"; // Importe le composant Home depuis le répertoire "pages"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Importe les éléments de React Router

// Définition du composant principal de l'application
function App() {
  return (
    /*Crée un conteneur principal avec la classe CSS "App"*/
    <div className="App">
      {/* gère les routes de l'application */}
      <Router>
        {/* barre de navigation présente sur toute les pages car dans le routeur
         */}
        <Navbar />
        {/* utilisé pour déclarer plusieurs routes et s'assure que seule la
        première route qui correspond à l'URL actuelle est rendue. */}
        <Switch>
          {/* définit la route pour home */}
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
