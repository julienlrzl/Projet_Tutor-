import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Assurez-vous d'importer useParams ici
import axios from "axios";
import "../styles/Summary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';



function Summary() {
  const [showFirstLast, setShowFirstLast] = useState(true);
  console.log('Cookie value:', );

  const [movie, setMovie] = useState(null); // État pour stocker les données du film
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const { id } = useParams(); // Récupère l'ID IMDb de l'URL

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`https://localhost:7286/api/Movie/ByImdbId/${Cookies.get('lastSelectedMovieId')}`);
        setMovie(response.data); // Met à jour l'état avec les données du film
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>No movie data found</div>;
  }

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
          <h2>{movie.title}</h2>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMinus}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div id="textMain">
        {movie.summary}
        </div>
        <Link to={`/Trailer/${movie.imdbId}`}>
          <button className="summary-button">
            <span>WATCH TRAILER</span>
          </button>
        </Link>
      </div>
      {showFirstLast && (
        <div className="item auto movie">
          <img src={movie.moviePoster} alt="Affiche Film" id="movieImage" />
        </div>
      )}
    </div>
  );
}



export default Summary;

