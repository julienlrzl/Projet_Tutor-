import React from "react";
import YouTube from 'react-youtube';
import "../styles/Trailer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function Trailer() {
  const videoId = "cXu2MhWYUuE";

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
        rel:0,
        fs:1,
        iv_load_policy:3,
        modestbranding:1,
        showinfo:0,
        controls:0,
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
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Trailer;
