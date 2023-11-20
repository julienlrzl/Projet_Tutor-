import React, { useState, useEffect } from "react";
import "../styles/NavbarBurger.css";

function NavbarBurger() {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbarMain ${showLinks ? "show-nav" : "hide-nav"} ${
        scrolling ? "scrolled" : ""
      }`}
    >
      <div className={`navbarLogo ${scrolling ? "scrolled" : ""}`}>ONLYFILM</div>
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
