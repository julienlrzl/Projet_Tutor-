import React from "react";
import Logo from '../assets/pizzaLogo.png';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo}/>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/Summary">Summary</Link>
        <Link to="/Actors">Actors</Link>
        <Link to="/Trailer">Trailer</Link>
      </div>
    </div>
  );
}

export default Navbar;
