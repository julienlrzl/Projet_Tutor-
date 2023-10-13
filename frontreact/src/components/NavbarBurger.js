import React, { useState } from "react";
import "../styles/NavbarBurger.css";

function NavbarBurger() {

const [showLinks, setShowLinks] = useState(false);
const handleShowLinks = () => {
    setShowLinks(!showLinks)
}

  return (
    <nav className={`navbarMain ${showLinks ? "show-nav" : "hide-nav"}`}>
      <div className="navbarLogo">NETFLIX</div>
      <ul className="navbarLinks">
        <li className="navbarItem slideInDown-1">
          <a href="/" className="navbarLink">
            SEARCH
          </a>
        </li>
        <li className="navbarItem slideInDown-2">
          <a href="/Summary" className="navbarLink">
            SUMMARY
          </a>
        </li>
        <li className="navbarItem slideInDown-3">
          <a href="/Actors" className="navbarLink">
            ACTORS
          </a>
        </li>
        <li className="navbarItem slideInDown-4">
          <a href="/Trailer" className="navbarLink">
            TRAILER
          </a>
        </li>
        <li className="navbarItem slideInDown-5">
          <a href="/Information" className="navbarLink">
            INFORMATION
          </a>
        </li>
        <li className="navbarItem slideInDown-6">
          <a href="/Proposals" className="navbarLink">
            PROPOSALS
          </a>
        </li>
      </ul>
      <button className="navbarBurger" onClick={handleShowLinks}>
        <span className="burgerBar"></span>
      </button>
    </nav>
  );
}

export default NavbarBurger;
