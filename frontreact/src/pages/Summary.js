import React, { useState, useEffect } from "react";
import "../styles/Summary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/intouchable.png";
import { Link } from "react-router-dom";
import data from '../data/movie.json';


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
    <div className="flex-container">
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
      <div className="item auto">
        <div id="description">
          <h3>SUMMARY</h3>
        </div>
        <div id="titleFilm">
          <h2>{data.movie[0].title}</h2>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMinus}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div id="textMain">
        {data.movie[0].Summary}
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
