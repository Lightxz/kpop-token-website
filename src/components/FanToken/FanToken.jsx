import React from "react";
import "./FanToken.css";

const FanToken = (props) => {
  const { name } = props;
  return (
    <div className="fan-token-container">
      <h2>{name}</h2>
    </div>
  );
};

export default FanToken;
