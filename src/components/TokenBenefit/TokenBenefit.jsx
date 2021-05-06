import React from "react";
import "./TokenBenefit.css";

const TokenBenefit = (props) => {
  const { title, message } = props;
  return (
    <div className="token-benefit-container">
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  );
};

export default TokenBenefit;
