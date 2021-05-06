import React from "react";
import "./FanTokens.css";

//Components
import FanToken from "components/FanToken/FanToken";

const FanTokens = () => {
  return (
    <div className="fan-tokens-container">
      <h1>Fan Tokens</h1>

      <div className="fan-tokens">
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
        <FanToken name="ARMY" />
      </div>
    </div>
  );
};

export default FanTokens;
