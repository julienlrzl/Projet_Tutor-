import React from "react";
import "../styles/Actors.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import ImageOmar from "../assets/omarSy.png";

function Actors() {
  return (
    <div>
      <div className="flex-container1">
        <div className="item1">
          <div id="description">
            <h3>ACTORS</h3>
          </div>
          <div id="titleFilm">
            <h2>Casting du film Intouchable</h2>
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
      <div className="flex-container2 ">
        <div class="card item auto">
          <div class="card-image">
            <img src={ImageOmar} alt="Omar Sy PP" />
          </div>
          <p class="card-title">Omar Sy</p>
          <p class="card-body">
            Omar Sy est un acteur, producteur de cinéma, réalisateur, scénariste
            et humoriste français, né le 20 janvier 1978 à Trappes. Il accède à
            la notoriété en formant, avec Fred Testot, le duo comique Omar et
            Fred.
          </p>
        </div>
        <div class="card item auto">
          <div class="card-image"></div>
          <p class="card-title">Olivier Nakache</p>
          <p class="card-body">
            Olivier Nakache, né le 14 avril 1973 à Suresnes, est un réalisateur,
            scénariste et producteur français. Il travaille en binôme avec Éric
            Toledano. Il est le frère de l'actrice et réalisatrice Géraldine
            Nakache.
          </p>
        </div>
        <div class="card item auto">
          <div class="card-image"></div>
          <p class="card-title">Éric Toledano</p>
          <p class="card-body">
            Éric Toledano est un réalisateur, scénariste et dialoguiste français
            né le 3 juillet 1971 à Paris. Il travaille en binôme avec Olivier
            Nakache à la fois pour l'écriture et la réalisation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Actors;
