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
              <div className="item-circle">
                <img
                  alt="1 Billion Supply"
                  src={item1}
                  placeholder="1 Billion Supply"
                />
              </div>
              <p className="item-feature">1 Billion Supply</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div className="item-circle">
                <img
                  alt="Milestone Burn"
                  src={item2}
                  placeholder="KPOP Milestone Burn"
                />
              </div>
              <p className="item-feature">Milestone Burn</p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div className="item-circle">
                <img
                  alt="2%-4% tax on Transactions"
                  src={item3}
                  placeholder="2%-4% tax on Transactions"
                />
              </div>
              <p className="item-feature">
                2%-4% tax on <br /> Transactions
              </p>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="item-feature-container">
              <div className="item-circle">
                <img
                  alt="Passive Yield Farming (PYF)"
                  src={item4}
                  placeholder="Passive Yield Farming (PYF)"
                />
              </div>
              <p className="item-feature">
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
