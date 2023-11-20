import React from "react";
import "../styles/Proposals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import img0 from "../assets/img0.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

function Proposals() {
  return (
    <div className="flex-containerProposal">
      <div className="item1">
        <div id="description">
          <h3>PROPOSALS</h3>
        </div>
        <div id="titleFilm">
          <h2>Other suggestions related to your movie</h2>
        </div>
        <div id="minus">
          <FontAwesomeIcon
            icon={faMinus}
            size="2xl"
            style={{ color: "#d29d00" }}
          />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src={img0} alt="film0" className="imgdim"/>
        </div>
        <div class="column">
          <img src={img1} alt="film1" className="imgdim"/>
        </div>
        <div class="column">
          <img src={img2} alt="film2" className="imgdim"/>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src={img3} alt="film3" className="imgdim"/>
        </div>
        <div class="column">
          <img src={img4} alt="film4" className="imgdim"/>
        </div>
        <div class="column">
          <img src={img5} alt="film5" className="imgdim"/>
        </div>
      </div>
    </div>
  );
}

export default Proposals;
