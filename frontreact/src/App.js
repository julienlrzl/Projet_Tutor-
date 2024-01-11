import "./App.css"; // Importe les styles CSS pour l'application
import NavbarBurger from "./components/NavbarBurger.js";
import Footer from "./components/Footer.js";
import Search from "./pages/Search.js"; // Importe le composant Home depuis le répertoire "pages"
import Summary from "./pages/Summary.js";
import Actors from "./pages/Actors.js";
import Trailer from "./pages/Trailer.js";
import Information from "./pages/Information.js";
import Proposals from "./pages/Proposals.js";
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
        <NavbarBurger />
        {/* utilisé pour déclarer plusieurs routes et s'assure que seule la
        première route qui correspond à l'URL actuelle est rendue. */}
        <Switch>
          {/* définit la route pour search */}
          <Route path="/" exact component={Search} />
          <Route path="/summary" exact component={Summary} />
          <Route path="/Actors" exact component={Actors} />
          <Route path="/Trailer" exact component={Trailer} />
          <Route path="/Information" exact component={Information} />
          <Route path="/Proposals" exact component={Proposals} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
