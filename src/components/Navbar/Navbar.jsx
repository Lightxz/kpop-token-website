import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import moment from "moment";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";

// Image
import KPOPLogo from "images/kpop-logo.png";

const NavbarComponent = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [timer, setTimer] = useState("");
  // const preSaleDate = new Date("Mon May 19 2021 22:00:00 GMT+0800"); //May 19, 2021, 10PM
  const preSaleDate = new Date("Mon May 19 2021 22:00:00 GMT+0800"); //May 19, 2021, 10PM

  useEffect(() => {
    const timerId = setInterval(() => displayTimer(), 1000);

    const scrollCallBack = () => {
      setIsStickyNav(window.pageYOffset > 10);
    };

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      setIsStickyNav(false);
      clearInterval(timerId);
    };
    // eslint-disable-next-line
  }, []);

  const toggleCollapsibleMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const closeCollapsibleMenu = () => {
    setIsExpanded(false);
  };

  const displayTimer = () => {
    const currentDateTime = new Date();
    const countdownTimer = moment(preSaleDate).diff(moment(currentDateTime));
    if (countdownTimer === 0) {
      clearInterval(1);
      return setTimer(0);
    }
    const duration = moment.duration(countdownTimer);
    const string =
      Math.floor(duration.asHours()) +
      moment.utc(countdownTimer).format(":mm:ss");
    return setTimer(string);
  };
  return (
    <div
      className={`navbar-wrapper ${
        (isStickyNav || isExpanded) && "isStickyNav"
      }`}
    >
      <div className="announcement-container">
        <a
          href="https://bscscan.com/address/0x3ba2b1c2c46200e826c56550ff7a2b29bad10f3d"
          rel="noreferrer"
          target="_blank"
          className="announcement-link"
        >
          Official Token Contract
        </a>

        <span className="announcement-link">
          {timer === 0
            ? `PRE SALE HAS STARTED`
            : `Pre Sale starts in: ${timer}`}
        </span>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={isExpanded}
        variant="dark"
        className={`navbar-container`}
      >
        <Navbar.Brand as="span" href="#home">
          <Link to="home" className="navbar-logo">
            <img src={KPOPLogo} alt="$KPOP" placeholder="KPOP Fan token logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-container"
          onClick={toggleCollapsibleMenu}
        >
          <span className="navbar-toggle-icon">&nbsp;</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="navbar-menus">
            <Link
              to="home"
              activeClass="active-navbar-link"
              spy={true}
              smooth={true}
              duration={250}
              className="navbar-menu"
              offset={-100}
              onClick={closeCollapsibleMenu}
            >
              HOME
            </Link>
            <Link
              to="about"
              activeClass="active-navbar-link"
              spy={true}
              smooth={true}
              duration={250}
              className="navbar-menu"
              offset={-100}
              onClick={closeCollapsibleMenu}
            >
              ABOUT
            </Link>
            <Link
              to="fanTokens"
              activeClass="active-navbar-link"
              spy={true}
              smooth={true}
              duration={250}
              className="navbar-menu"
              offset={-100}
              onClick={closeCollapsibleMenu}
            >
              FAN TOKENS
            </Link>
            <Link
              to="roadmap"
              activeClass="active-navbar-link"
              spy={true}
              smooth={true}
              duration={250}
              className="navbar-menu"
              offset={-100}
              onClick={closeCollapsibleMenu}
            >
              ROADMAP
            </Link>
            <a
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3Ba2b1C2c46200e826C56550ff7a2b29bad10F3d"
              rel="noreferrer"
              target="_blank"
              className="how-to-buy-button"
              onClick={closeCollapsibleMenu}
            >
              HOW TO BUY
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
