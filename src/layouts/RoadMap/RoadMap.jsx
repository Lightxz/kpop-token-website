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
          <Col lg={3}>
            <div className="timeline-item">
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis pharetra mauris, et eleifend arcu faucibus
                quis. Vestibulum leo leo, auctor nec nibh in, eleifend
                pellentesque eros.
              </p>
            </div>
          </Col>

          <Col lg={3} className="timeline-item end-space"></Col>

          <Col lg={3}>
            <div className="timeline-item">
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis pharetra mauris, et eleifend arcu faucibus
                quis. Vestibulum leo leo, auctor nec nibh in, eleifend
                pellentesque eros.
              </p>
            </div>
          </Col>

          <Col lg={2} className="timeline-item end-space"></Col>
        </Row>

        <Row>
          <Col lg={1}></Col>
          <Col lg={3}></Col>
          <Col lg={3} className="timelime-item2-col">
            <div className="timeline-item2">
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis pharetra mauris, et eleifend arcu faucibus
                quis. Vestibulum leo leo, auctor nec nibh in, eleifend
                pellentesque eros.
              </p>
            </div>
          </Col>

          <Col lg={3} className="timelime-item2-col"></Col>

          <Col lg={2} className="timelime-item2-col">
            <div className="timeline-item2">
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque lobortis pharetra mauris, et eleifend arcu faucibus
                quis. Vestibulum leo leo, auctor nec nibh in, eleifend
                pellentesque eros.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoadMap;
