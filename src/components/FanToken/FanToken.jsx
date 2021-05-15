import React from "react";
import "./FanToken.css";

const FanToken = (props) => {
  const { image, logo, name, startDate, endDate, openingPrice } = props;
  return (
    <div className="fan-token-card">
      <div className="fan-token-coming-soon-overlay">Coming Soon</div>
      <div
        className="group-image-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="group-name-container">
        <p className="group-name">{name}</p>
        <img alt="$KPOP token" src={logo} placeholder={name} />
      </div>

      <div className="card-content">
        <div className="card-text">
          <p>FTO Start Date:</p>
          <p>{startDate}</p>
        </div>

        <div className="card-text">
          <p>FTO End Date:</p>
          <p>{endDate}</p>
        </div>

        <div className="card-text">
          <p>Opening Price:</p>
          <p>{openingPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default FanToken;
