import React from "react";
import "./TokenFeatures.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// Image
import item1 from "images/item-1.svg";
import item2 from "images/item-2.svg";
import item3 from "images/item-3.svg";
import item4 from "images/item-4.svg";

// Components
import TokenFeature from "components/TokenFeature/TokenFeature";

const TokenFeatures = () => {
  return (
    <div className="token-features-container">
      <Container>
        <Row className="token-features-title-row">
          <Col sm={12} lg={7}>
            <h1 className="token-features-title">Token Features</h1>
            <p className="token-features-description">
              The new and innovative KPOP-focused decentralized finance protocol
              incentivizing every holders with numerous opportunities.
            </p>
          </Col>
        </Row>

        <Row className="token-features">
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div class="item-circle">
                <img src={item1} />
              </div>
              <p class="item-feature">1 Billion Supply</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div class="item-circle">
                <img src={item2} />
              </div>
              <p class="item-feature">
                MILESTONE <br />
                BURN
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div class="item-circle">
                <img src={item3} />
              </div>
              <p class="item-feature">
                2%-4% tax on <br /> Transactions
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div class="item-circle">
                <img src={item4} />
              </div>
              <p class="item-feature">
                Passive Yield <br /> Farming (PYF)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TokenFeatures;
