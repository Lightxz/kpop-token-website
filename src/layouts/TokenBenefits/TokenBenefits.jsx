import React from "react";
import "./TokenBenefits.css";

// Component
import Container from "components/Container/Container";

// Bootstrap
import { Row, Col, Accordion } from "react-bootstrap";

// Icons
import { Check2 } from "react-bootstrap-icons";

// Image
import KpopTokenImages from "images/kpop-tokens.svg";

const TokenBenefits = () => {
  return (
    <div id="about" className="token-benefits-container">
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <h1 className="token-benefits-title">Hurry up! </h1>
            <h2 className="token-benefits-description">
              Become a token holder and enjoy these amazing benefits!
            </h2>

            <div className="token-benefits">
              <Accordion defaultActiveKey="0">
                <div className="accordion-container">
                  <Accordion.Toggle className="accordion-header" eventKey="0">
                    <Check2 className="accordion-header-icon" size={35} />{" "}
                    Passive Income
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="accordion-collapse-container"
                    eventKey="0"
                  >
                    <div className="accordion-body">
                      <p>
                        There are two ways to maximize your earning
                        opportunities
                      </p>
                      <br />
                      <p>
                        1. Grow your $KPOP tokens by just holding them in your
                        wallet. The more you hold, the more you earn!
                      </p>
                      <br />
                      <p>
                        2. Stake your $KPOP tokens in our platform and earn
                        rewards that you can claim weekly or monthly basis.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>

                <div className="accordion-container">
                  <Accordion.Toggle className="accordion-header" eventKey="1">
                    <Check2 className="accordion-header-icon" size={35} /> Yield
                    Farming
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="accordion-collapse-container"
                    eventKey="1"
                  >
                    <div className="accordion-body">
                      <p>
                        Maximize opportunities with $KPOP by staking your fan
                        tokens in our platform and multiply your passive income
                        rewards!{" "}
                        <strong>
                          <a
                            href="https://kpopfantoken.medium.com/"
                            rel="noreferrer"
                            target="_blank"
                            className="farming-learn-more-link"
                          >
                            Learn more
                          </a>
                        </strong>
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>

                <div className="accordion-container">
                  <Accordion.Toggle className="accordion-header" eventKey="2">
                    <Check2 className="accordion-header-icon" size={35} /> Value
                    Appreciation
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="accordion-collapse-container"
                    eventKey="2"
                  >
                    <div className="accordion-body">
                      <p>
                        Our vision is to not just enable the fans to purchase
                        products seamlessly. We also aim to add value by
                        allocating a portion of every transaction fee to the
                        liquidity and to the token holders. This feature boosts
                        the token’s economy creating upward price movement.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>

                <div className="accordion-container">
                  <Accordion.Toggle className="accordion-header" eventKey="3">
                    <Check2 className="accordion-header-icon" size={35} />
                    Governance
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="accordion-collapse-container"
                    eventKey="3"
                  >
                    <div className="accordion-body">
                      <p>
                        Are you an ARMY? A BLINK? An iGOT7? We hear you and we
                        will give you what you want! By owning $KPOP tokens, you
                        will have the rights to vote and the influence on which
                        products you want to be released first.
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>

                <div className="accordion-container">
                  <Accordion.Toggle className="accordion-header" eventKey="4">
                    <Check2 className="accordion-header-icon" size={35} />
                    Exclusive Benefits
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    className="accordion-collapse-container"
                    eventKey="4"
                  >
                    <div className="accordion-body">
                      <p>
                        As a $KPOP token holder, you will be able to participate
                        in various activities such as giveaways (hottest
                        merchandise, free tokens, concert tickets, trip to
                        Korea), live interaction with your favorite KPOP idol
                        and many more!
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>

                <div className="accordion-container">
                  <Accordion.Toggle className="accordion-header" eventKey="5">
                    <Check2 className="accordion-header-icon" size={35} />
                    Global Fandom
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="5">
                    <div className="accordion-body">
                      <p>
                        Break the barriers and keep the KPOP fandom alive and
                        strong! Join us and interact with a global community of
                        KPOP stans!
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <div className="kpop-tokens-container">
              <img
                className="kpop-tokens"
                src={KpopTokenImages}
                alt="KPOP Tokens"
                placeholder="KPOP Fan tokens"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TokenBenefits;
