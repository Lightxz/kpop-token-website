import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div id="home" className="landing-container">
      <div className="landing-body">
        {/* PLEASE ADD LOGO HERE FEEL FREE TO RE ORGANIZE LAYOUT BUT CONTENT IS FINAL */}

        <p>For the KPOP fandom by KPOP stans</p>
        <h1>A Cryptocurrency Fan Token For The KPOP stans</h1>

        <p>
          Fan Tokens give you access to exclusive promotions, VIP event access,
          full KPOP experience in Korea, rights to buy NFTs of your favorite
          KPOP artist and own a licensed digital moment from your favorite KPOP
          star. Be more than a fan, be a <span>superfan</span>
        </p>

        <a href="#">
          <button>Buy Now</button>
        </a>
        <a href="#">
          <button>Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
