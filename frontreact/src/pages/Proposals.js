import React, { useState, useEffect } from "react";
import "../styles/Proposals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom'; 

function Proposals() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory(); 

  const checkImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject('https://i.imgur.com/Uqb5kkn.png');
      img.src = url;
    });
  };

  const handleMovieClick = (imdbId) => {
    Cookies.set('lastSelectedMovieId', imdbId);
    history.push('/summary'); // Redirige vers la page de résumé
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      const imdbId = Cookies.get('lastSelectedMovieId');
      if (!imdbId) {
        setError('No movie ID found in cookie');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://localhost:7286/api/Movie/Recommendations/${imdbId}`);
        const moviesWithValidImages = await Promise.all(
          response.data.map(async movie => ({
            ...movie,
            moviePoster: await checkImage(movie.moviePoster).catch(() => 'https://i.imgur.com/Uqb5kkn.png')
          }))
        );
        setRecommendations(moviesWithValidImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
    
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex-containerProposal">
      <div className="item1">
        {/* ... */}
      </div>
      <div className="row">
      {recommendations.slice(0, 3).map((movie, index) => (
  <div className="column" key={index} onClick={() => handleMovieClick(movie.imdbId)}>
    <img src={movie.moviePoster} alt={`film${index}`} className="imgdim" />
    <strong className="movie-title">{movie.title}</strong>
  </div>
))}
      </div>
      <div className="row">
      {recommendations.slice(3, 6).map((movie, index) => (
  <div className="column" key={index} onClick={() => handleMovieClick(movie.imdbId)}>
    <img src={movie.moviePoster} alt={`film${index}`} className="imgdim" />
    <strong className="movie-title">{movie.title}</strong>
  </div>
))}
      </div>
    </div>
  );
}

export default Proposals;
