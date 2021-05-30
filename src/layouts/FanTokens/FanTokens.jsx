import React from "react";
import "./FanTokens.css";

//Components
import Container from "components/Container/Container";
import FanToken from "components/FanToken/FanToken";

//Images
import btsPhoto from "images/BTS-group-photo.png";
import exoPhoto from "images/EXO-group-photo.png";
import blackpinkPhoto from "images/blackpink-group-photo.png";
import twicePhoto from "images/twice-group-photo.png";
import itzyPhoto from "images/itzy.jpeg";
import shineePhoto from "images/shinee-group-photo.png";

// logos
import btsLogo from "images/BTS-token.png";
import twiceLogo from "images/twice-logo.png";
import exoLogo from "images/EXO-logo.png";
import blackpinkLogo from "images/blackpink-logo.png";
import shineeLogo from "images/shinee-logo.png";
import itzyLogo from "images/itzy-logo.png";

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
            image={exoPhoto}
            logo={exoLogo}
            name="EXO"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={blackpinkPhoto}
            logo={blackpinkLogo}
            name="BLACKPINK"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={twicePhoto}
            logo={twiceLogo}
            name="TWICE"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={itzyPhoto}
            logo={itzyLogo}
            name="ITZY"
            startDate="TBA"
            endDate="TBA"
            openingPrice="TBA"
          />
          <FanToken
            image={shineePhoto}
            logo={shineeLogo}
            name="SHINEE"
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
