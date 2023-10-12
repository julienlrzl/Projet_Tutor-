import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder"; // Importe l'icone pour la liste de navigation (hamburger)

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <b className="title">NETFLIX</b>
        <div className="hiddenLinks">
          <Link to="/">SUMMARY</Link>
          <Link to="/Summary">ACTORS</Link>
          <Link to="/Actors">TRAILER</Link>
          <Link to="/Information">INFORMATION</Link>
          <Link to="/Proposals">PROPOSALS</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">SUMMARY</Link>
        <Link to="/Summary">ACTORS</Link>
        <Link to="/Actors">TRAILER</Link>
        <Link to="/Information">INFORMATION</Link>
        <Link to="/Proposals">PROPOSALS</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
