import React, { useState, useEffect } from "react";
import "../styles/Summary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/intouchable.png";
import { Link } from "react-router-dom";

function Summary() {
  const [showFirstLast, setShowFirstLast] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setShowFirstLast(false); // Masquer le premier et le dernier div sur les petits écrans
      } else {
        setShowFirstLast(true);
      }
    };

    handleResize(); // Vérifier la taille de l'écran lors du chargement initial
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div class="flex-container">
      {showFirstLast && (
        <div className="item auto">
          <div id="quote">
            "Everybody has something that chews them up and, for me, that thing
            was always loneliness. The cinema has the power to make you not feel
            lonely, even when you are."
          </div>
          <div id="author">
            <FontAwesomeIcon icon={faMinus} style={{ color: "#000000" }} /> Tom
            Hanks, Actor and Producer
          </div>
        </div>
      )}
      <div class="item auto">
        <div id="description">
          <h3>SUMMARY</h3>
        </div>
        <div id="titleFilm">
          <h2>Intouchable</h2>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMinus}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div id="textMain">
          In Paris, the aristocratic and intellectual Philippe is a quadriplegic
          millionaire who is interviewing candidates for the position of his
          carer, with his red-haired secretary Magalie. Out of the blue, Driss
          cuts the line of candidates and brings a document from the Social
          Security and asks Phillipe to sign it to prove that he is seeking a
          job position so he can receive his unemployment benefit. Philippe
          challenges Driss, offering him a trial period of one month to gain
          experience helping him. Then Driss can decide whether he would like to
          stay with him or not. Driss accepts the challenge and moves to the
          mansion, changing the boring life of Phillipe and his employees.
        </div>
        <Link to={"/Trailer"}>
          <button className="summary-button">
            <span>WATCH TRAILER</span>
          </button>
        </Link>
      </div>
      {showFirstLast && (
        <div className="item auto movie">
          <img src={Image} alt="Affiche Film" id="movieImage" />
        </div>
      )}
    </div>
  );
}

export default Summary;
