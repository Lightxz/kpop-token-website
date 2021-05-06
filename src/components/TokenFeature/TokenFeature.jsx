import React from "react";
import "./TokenFeature.css";

const TokenFeature = (props) => {
  const { text } = props;

  return (
    <div className="token-feature-container">
      <p>{text}</p>
    </div>
  );
};

export default TokenFeature;
