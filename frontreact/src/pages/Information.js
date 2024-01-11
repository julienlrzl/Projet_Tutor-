import React, { useState, useEffect } from "react";
import "../styles/Information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faCalendar,
  faQuoteLeft,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from 'js-cookie';

function Information() {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`https://localhost:7286/api/Movie/ByImdbId/${Cookies.get('lastSelectedMovieId')}`);
        setMovieData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieData) {
    return <div>No movie data found</div>;
  }

  // Votre logique d'affichage ici
  const isDirectorAvailable =
    movieData.director !== null && movieData.director.trim() !== "";
  const isWritersAvailable =
    movieData.writers !== null && movieData.writers.trim() !== "";
  const isCastAvailable =
    movieData.cast !== null && movieData.cast.trim() !== "";
  const isRatingAvialable =
    movieData.rating !== null && movieData.rating.trim() !== "";

  const runtime = movieData.runtime !== 0 ? movieData.runtime : "unknown numbers of";


  
  return (
    <div className="flex-containerInf">
      <div className="item0 auto">
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
          The film {movieData.title} was released in {movieData.year}.
        </div>
        <div className="bellowIcon">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
        <div className="informations">Genre</div>
        <div className="descriptioninformations">
        {movieData.title} is a {movieData.genres}.
        </div>
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
          {movieData.title} have earned{" "}
          {isRatingAvialable ? (
            <>
              {movieData.rating} <br />
            </>
          ) : (
            "an unknown numbers of"
          )}{" "}
          stars. It lasts {runtime} min.
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
          {isDirectorAvailable ? (
            <>
              {movieData.director}, <br />
            </>
          ) : (
            "No director listed, "
          )}
          {isWritersAvailable ? (
            <>
              {movieData.writers}, <br />
            </>
          ) : (
            "no writers entered, "
          )}
          {isCastAvailable ? <>{movieData.cast}</> : "no cast entered"}
          {!isDirectorAvailable &&
            !isWritersAvailable &&
            !isCastAvailable &&
            "Information not available."}
        </div>
      </div>
    </div>
  );
}

export default Information;
