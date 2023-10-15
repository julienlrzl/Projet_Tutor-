import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons"; // Remarque : Il doit s'agir d'une icône réelle de FontAwesome 6+

function Footer() {
  return (
    <div className="containerFooter">
      <div className="footer">
        <p className="leftSideFooter">
          COPYRIGHT{" "}
          <FontAwesomeIcon icon={faCopyright} style={{ color: "#ffffff" }} />{" "}
          2023
        </p>
        <div className="rightSideFooter">
          MADE WITH{" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="fa-beat-fade"
            style={{ color: "#ff2600" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
