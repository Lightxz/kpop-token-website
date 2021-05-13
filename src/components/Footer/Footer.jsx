import React from "react";
import "./Footer.css";

// Component
import Container from "components/Container/Container";

// Logo
import KPOPlogo from "images/kpop-logo.png";

// Icons
import { Twitter, Telegram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container>
        <div className="footer-body">
          <div className="footer-logo-container">
            <img src={KPOPlogo} alt="$KPOP" className="footer-logo" />
            <p className="footer-credit-message">Copyright © 2021 - $KPOP</p>
          </div>

          <div className="footer-container-2">
            <div className="footer-links-container">
              <h2 className="footer-links-title">Stay connected:</h2>
              <div className="footer-links">
                <a
                  href="https://www.google.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="footer-link"
                >
                  <Telegram className="footer-social-icon" />
                </a>
                <a
                  href="https://www.google.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="footer-link"
                >
                  <Twitter className="footer-social-icon" />
                </a>
                <a
                  href="https://www.google.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="footer-link"
                >
                  <span className="footer-social-icon-medium">M</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
