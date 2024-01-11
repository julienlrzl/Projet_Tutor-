import React from "react";
import YouTube from "react-youtube";
import "../styles/Trailer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import data from "../data/moviefinal.json";
import Cookies from 'js-cookie';


function Trailer() {
  const movieData = data;
  const videoId = movieData.youtubeTrailer;
  const isTrailerAvailable = videoId && videoId.trim() !== "";

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
            <h2>Intouchable</h2>
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
          <YouTube videoId={videoId} opts={opts} />
        ) : (
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/mo1_E5_oZ5E"
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
