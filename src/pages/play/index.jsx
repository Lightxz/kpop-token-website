import React from "react";
import "./index.css";
import KPOPLogo from "images/kpop-logo.png";
import { Link } from "react-router-dom";

const Play = () => {
  return (
    <div className="playContainer">
      <div className="backgroundOverlay" />

      <Link to="/" className="logoContainer">
        <img src={KPOPLogo} alt="KPOP Digital" className="logoImage" />
        <p className="logoTitle">
          <strong>KPOP </strong>DIGITAL
        </p>
      </Link>

      <section>
        <div class="snow1"></div>
        <div class="snow2"></div>
        <div class="snow3"></div>
      </section>

      <div className="content">
        <div className="headlineContainer">
          <h1 className="descriptionTitle">
            The most entertaining blockchain-based NFT game!
          </h1>
        </div>

        <h2 className="subHeadline">
          Coming soon on <strong>KPOP</strong> fan token.
        </h2>
      </div>
    </div>
  );
};

export default Play;
