import React from "react";
import "./Landing.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col } from "react-bootstrap";

const Landing = () => {
  return (
    <div id="home" className="landing-container">
      <Container>
        <div className="landing-body">
          <Row>
            <Col lg={6}>
              <h1>A Cryptocurrency Fan Token For The KPOP stans</h1>
              <p>
                <span className="text-emphasize">$KPOP Fan Tokens </span>give
                you exclusive access to special promotions, VIP events, licensed
                digital photos and moments from your favorite{" "}
                <span className="text-emphasize">KPOP idols</span>,and a chance
                to win a <span className="text-emphasize">FULL KPOP </span>
                experience in Korea!
              </p>

              <p>
                Be more than a fan, be a superfan! Join a fun-filled community
                of <span className="text-emphasize">KPOP</span> stans!
              </p>

              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="buy-now-button">
                  BUY NOW
                </button>
              </a>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Landing;
