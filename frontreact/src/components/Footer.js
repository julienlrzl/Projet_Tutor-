import React from "react";
import "../styles/Footer.css";
import Heart from "../assets/heartFooter.png";

function Footer() {
  return (
    <div className="footer">
      <p className="leftSideFooter">COPYRIGHT &copy; 2023</p>
      <div className="rightSideFooter">
        MADE WITH <img src={Heart} alt="Heart" />
      </div>
    </div>
  );
}

export default Footer;
