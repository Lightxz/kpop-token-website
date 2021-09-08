import React from "react";
import "./index.css";
import KPOPLogo from "images/kpop-logo.png";
import { Link } from "react-router-dom";

const Play = () => {
  return (
    <div className="playContainer">
      <div className="backgroundOverlay" />

      <a href="/" className="logoContainer">
        <img src={KPOPLogo} alt="KPOP Digital" className="logoImage" />
        <p className="logoTitle">
          <strong>KPOP </strong>DIGITAL
        </p>
      </a>

      <div className="content">
        <h1 className="descriptionTitle">
          The most entertaining blockchain-based Play To Earn under the BSC
          ecosystem.
        </h1>

        <h2>Coming soon on KPOP fan token.</h2>
      </div>
    </div>
  );
};

export default Play;
