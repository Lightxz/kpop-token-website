import Container from "components/Container/Container";
import React from "react";
import "./MobileApp.css";
import AppMockup from "images/mobile-mockup.gif";

function MobileApp() {
  return (
    <div className="mobileAppContainer">
      <Container>
        <div className="contentContainer">
          <div className="textContainer">
            <h1 className="textTitle">KPOP Mobile App</h1>
            <p className="textDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              maiores qui optio corrupti facere voluptatibus enim pariatur
              debitis quo, ipsum aliquid placeat autem dolore id repellat
              molestias, voluptates, necessitatibus minus.
            </p>

            <img
              src={AppMockup}
              alt="KPOP Mobile app"
              className="appMockup mobileMockup"
            />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="downloadNowBtn"
            >
              Download Now
            </a>
          </div>

          <div className="mockupContainer desktopMockup">
            <img src={AppMockup} alt="KPOP Mobile app" className="appMockup" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MobileApp;
