import React from "react";
import "./RoadMap.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col } from "react-bootstrap";

const RoadMap = () => {
  return (
    <div id="roadmap" className="roadmap-container">
      <h1 className="roadmap-title">2021 Roadmap</h1>
      {/* 1000px above */}
      <div id="desktop">
        <Container>
          <Row>
            <Col lg={1} className="space"></Col>
            <Col lg={4} className="timeline-col">
              <div className="timeline-item">
                <h3>Q2</h3>
                <div>
                  <p>Strategic Partnerships</p>
                  <p>Locked Staking</p>
                  <p>Secure Agency Licenses</p>
                  <p>Exclusive Promotions</p>
                </div>
              </div>
            </Col>

            <Col lg={4} className="timeline-col">
              <div className="timeline-item">
                <h3>Q3</h3>
                <div>
                  <p>Governance</p>
                  <p>Release of Fan Tokens</p>
                  <p>Liquidity Mining</p>
                  <p>$KPOP Mobile App</p>
                  <p>Exchange Listings</p>
                  <p>Partnerships with KPOP Marketplaces</p>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="timeline-item">
                <h3>Q4</h3>
                <div>
                  <p>NFT Marketplace </p>
                  <p>AMAs</p>
                  <p>Exchange Listings</p>
                  <p>Digital Products/NFTs</p>
                  <p>Big Surprise</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 1000px below */}
      <div id="mobile-roadmap" class="mob-roadmap">
        <Container>
          <Row>
            <Col md={10}>
              <ul className="mobile-timeline-items">
                <li className="mobile-timeline-item">
                  <h3>Q2</h3>
                  <div>
                    <p>Strategic Partnerships</p>
                    <p>Locked Staking</p>
                    <p>Secure Licenses</p>
                    <p>Exclusive Promotions</p>
                  </div>
                </li>

                <li className="">
                  <br></br>
                  <br></br>
                </li>

                <li className="mobile-timeline-item">
                  <h3>Q3</h3>
                  <div>
                    <p>Governance</p>
                    <p>Release of Fan Tokens</p>
                    <p>Liquidity Mining</p>
                    <p>$KPOP Mobile App</p>
                    <p>Exchange Listings</p>
                    <p>Partnerships with KPOP Marketplaces</p>
                  </div>
                </li>

                <li className="">
                  <br></br>
                  <br></br>
                </li>

                <li className="mobile-timeline-item">
                  <h3>Q4</h3>
                  <div>
                    <p>NFT Marketplace </p>
                    <p>AMAs</p>
                    <p>Exchange Listings</p>
                    <p>Digital Products/NFTs</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RoadMap;
