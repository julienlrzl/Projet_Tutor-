import React from "react";
import "../styles/Information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faCalendar,
  faQuoteLeft,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Information() {
  return (
    <div className="flex-containerInf">
      <div className="item auto">
        <div id="descriptionInf">
          <h3>INFORMATION</h3>
        </div>
        <div id="titleFilmInf">
          <h2>Complementary and usefull informations on your movie</h2>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMinus}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
      </div>
      <div className="item auto">
        <div>
          <FontAwesomeIcon
            icon={faCalendar}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div className="informations">Year</div>
        <div className="descriptioninformations">
          The film Intouchable was released in 2011.
        </div>
        <div className="bellowIcon">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div className="informations">Genre</div>
        <div className="descriptioninformations">Intouchable is a comedy.</div>
      </div>
      <div className="item auto">
        <div>
          <FontAwesomeIcon
            icon={faStar}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div className="informations">Rating and Runtime</div>
        <div className="descriptioninformations rating">
          Intuochable have earned 5 stars. It lasts 1 h 52 min.
        </div>
        <div className="bellowIcon">
          <FontAwesomeIcon
            icon={faUser}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div className="informations">Director, writers and cast</div>
        <div className="descriptioninformations">
          Olivier Nakache, <br />
          Éric Toledano
        </div>
      </div>
    </div>
  );
}

export default Information;
