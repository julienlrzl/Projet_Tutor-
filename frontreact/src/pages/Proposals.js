import React from "react";
import "../styles/Proposals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Proposals() {
  return (
    <div>
      <div className="flex-container1">
        <div className="item1">
          <div id="description">
            <h3>PROPOSALS</h3>
          </div>
          <div id="titleFilm">
            <h2>Other suggestions related to your movie</h2>
          </div>
          <div id="minus">
            <FontAwesomeIcon
              icon={faMinus}
              size="2xl"
              style={{ color: "#d29d00" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposals;
