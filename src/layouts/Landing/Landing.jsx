import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div id="home" className="landing-container">
      <div className="landing-body row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-7">
              <h1>A Cryptocurrency Fan Token For The KPOP stans</h1>
            </div>
          </div>
          <p>
            $KPOP Fan Tokens give you exclusive access to special promotions,
            VIP events, licensed digital photos and moments from your favorite
            KPOP idols,and a chance to win a FULL KPOP experience in Korea!
          </p>

          <p>
            Be more than a fan, be a superfan! Join a fun-filled community of
            KPOP stans!
          </p>

          <a href="#">
            <button type="button" class="btn buy-now">
              Buy Now
            </button>
          </a>
          <a href="#">
            <button type="button" class="btn learn-more">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
