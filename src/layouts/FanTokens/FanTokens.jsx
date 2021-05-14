import React from "react";
import "./FanTokens.css";

//Components
import Container from "components/Container/Container";
import FanToken from "components/FanToken/FanToken";

//Image
import btsPhoto from "images/BTS-group-photo.png";
import btsLogo from "images/BTS-token.png";

const FanTokens = () => {
  return (
    <div id="fanTokens" className="fan-tokens-container">
      <h1 className="fan-tokens-title">Fan Tokens</h1>
      <Container>
        <div className="fan-tokens">
          <FanToken
            image={btsPhoto}
            logo={btsLogo}
            name="BTS"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={btsPhoto}
            logo={btsLogo}
            name="BTS"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={btsPhoto}
            logo={btsLogo}
            name="BTS"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={btsPhoto}
            logo={btsLogo}
            name="BTS"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={btsPhoto}
            logo={btsLogo}
            name="BTS"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={btsPhoto}
            logo={btsLogo}
            name="BTS"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
        </div>
      </Container>
    </div>
  );
};

export default FanTokens;
