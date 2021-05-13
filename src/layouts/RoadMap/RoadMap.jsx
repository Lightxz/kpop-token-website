import React from "react";
import "./RoadMap.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col } from "react-bootstrap";

const RoadMap = () => {
  return (
    <div id="roadmap" className="roadmap-container">
      <Container>
        <Row>
          <Col lg={1} className="space"></Col>
          <Col lg={3} className="space"></Col>

          <Col lg={3} className="timeline-item end-space"></Col>

          <Col lg={3}>
            <div className="timeline-item">
              <h3>Q3</h3>
              <div>
                <p>Governance</p>
                <p>Release of Fan Tokens</p>
                <p>Liquidity Mining</p>
                <p>Release of NFTs</p>
                <p>Exchange Listings</p>
                <p>Partnerships with KPOP Marketplaces</p>
              </div>
            </div>
          </Col>

          <Col lg={2} className="timeline-item end-space"></Col>
        </Row>

        <Row>
          <Col lg={1}></Col>
          <Col lg={3}></Col>
          <Col lg={3} className="timelime-item2-col">
            <div className="timeline-item2">
              <h3>Q2</h3>
              <div>
                <p>Strategic Partnerships</p>
                <p>Locked Staking</p>
                <p>Secure Licenses</p>
                <p>Exclusive Promotions</p>
              </div>
            </div>
          </Col>

          <Col lg={3} className="timelime-item2-col"></Col>

          <Col lg={2} className="timelime-item2-col">
            <div className="timeline-item2">
              <h3>Q4</h3>
              <div>
                <p>NFT Marketplace </p>
                <p>AMAs</p>
                <p>Exchange Listings</p>
                <p>Digital Products/NFTs</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoadMap;
