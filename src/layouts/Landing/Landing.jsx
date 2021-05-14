import React from "react";
import "./Landing.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// Icons
import { ArrowDownCircle } from "react-bootstrap-icons";

// Image
import KpopTokenCards from "images/kpop-token-cards.svg";

const Landing = () => {
  return (
    <div id="home" className="landing-container">
      <div className="landing-oval-overlay" />
      <Container>
        <div className="landing-body">
          <Row>
            <Col md={6} lg={5}>
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
                href="https://pancakeswap.finance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="buy-now-button">
                  BUY NOW
                </button>
              </a>
            </Col>
            <Col
              md={6}
              lg={7}
              className="kpop-token-image-container d-none d-md-flex"
            >
              <img
                src={KpopTokenCards}
                alt="$KPOP tokens"
                className="kpop-token-image"
              />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="landing-footer-container">
        <a href="#about" className="landing-footer-arrow-icon">
          <ArrowDownCircle size={40} />
        </a>
      </div>
    </div>
  );
};

export default Landing;
