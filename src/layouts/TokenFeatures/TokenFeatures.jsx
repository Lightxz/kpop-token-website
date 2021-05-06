import React from "react";
import "./TokenFeatures.css";

// Components
import TokenFeature from "components/TokenFeature/TokenFeature";

const TokenFeatures = () => {
  return (
    <div className="token-features-container">
      <h1>Token Features</h1>

      <div className="token-features">
        <TokenFeature text="1 BILLION SUPPLY" />
        <TokenFeature text="MILESTONE BURN" />
        <TokenFeature text="2%-4% tax on Transactions" />
        <TokenFeature text="Passive Yield Farming (PYF)" />
        <TokenFeature text="Join a global community of KPOP stans" />
      </div>
    </div>
  );
};

export default TokenFeatures;
