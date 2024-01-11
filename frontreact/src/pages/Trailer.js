import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "../styles/Trailer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import data from "../data/moviefinal.json";
<<<<<<< HEAD
import Cookies from 'js-cookie';

=======
import { useParams } from "react-router-dom"; 
import axios from "axios";
>>>>>>> 69614f0db9fff9528b08ee06938b84311f475b0a

function Trailer() {
  const [showFirstLast, setShowFirstLast] = useState(true);

  const [movie, setMovie] = useState(null); // État pour stocker les données du film
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const { id } = useParams(); // Récupère l'ID IMDb de l'URL

  const movieData = data;
  const videoId = movieData.youtubeTrailer;
  const isTrailerAvailable = videoId && videoId.trim() !== "";
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`https://localhost:7286/api/Movie/ByImdbId/${id}`);
        console.log(response.data); // Ceci imprimera les données reçues dans la console du navigateur
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

  console.log('Cookie value:', Cookies.get('lastSelectedMovieId'));

  
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      rel: 0,
      fs: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      showinfo: 0,
      controls: 0,
    },
  };

  return (
    <div>
      <div className="flex-container1">
        <div className="item1">
          <div id="description">
            <h3>TRAILER</h3>
          </div>
          <div id="titleFilm">
            <h2>{movie.title}</h2>
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
      <div id="videoContainer"> 
        {isTrailerAvailable ? (
          <YouTube videoId={movie.youtubeTrailer} opts={opts} />
        ) : (
          <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.youtubeTrailer}`}
            title="Next Video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Trailer;
