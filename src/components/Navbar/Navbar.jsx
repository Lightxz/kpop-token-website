import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
// import moment from "moment";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";

// Image
import KPOPLogo from "images/kpop-logo.png";
import bscanLogo from "images/bscan-logo.jpeg";
import dextoolsLogo from "images/dextools-logo.png";
import Whitepaper from "assets/kpop-whitepaper.pdf";

const NavbarComponent = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  // const [timer, setTimer] = useState("");
  // const preSaleDate = new Date("Mon May 21 2021 13:00:00 GMT+0800"); //May 21, 2021, 1PM

  useEffect(() => {
    // const timerId = setInterval(() => displayTimer(), 1000);

    const scrollCallBack = () => {
      setIsStickyNav(window.pageYOffset > 10);
    };

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      setIsStickyNav(false);
      // clearInterval(timerId);
    };
    // eslint-disable-next-line
  }, []);

  const toggleCollapsibleMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const closeCollapsibleMenu = () => {
    setIsExpanded(false);
  };

  // const displayTimer = () => {
  //   const currentDateTime = new Date();
  //   const countdownTimer = moment(preSaleDate).diff(moment(currentDateTime));
  //   if (countdownTimer <= 0) {
  //     clearInterval(1);
  //     return setTimer(0);
  //   }
  //   const duration = moment.duration(countdownTimer);
  //   const string =
  //     Math.floor(duration.asHours()) +
  //     moment.utc(countdownTimer).format(":mm:ss");
  //   return setTimer(string);
  // };

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
          className="announcement-link-container"
        >
          <img src={bscanLogo} alt="bscan" className="announcement-logo" />
          <span className="announcement-link text_underline">
            Official Token Contract
          </span>
        </a>

        <a
          href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x83ca76bdc2e454e362826c25b8f4abd0791bb594"
          rel="noreferrer"
          target="_blank"
          className="announcement-link-container"
        >
          <img src={dextoolsLogo} alt="bscan" className="announcement-logo" />
          <span className="announcement-link text_underline">
            Official KPOP Chart
          </span>
        </a>

        {/* {timer === 0 ? (
          <span className="announcement-link">
            <MegaphoneFill /> PRE SALE HAS ENDED
          </span>
        ) : (
          <a
            href="https://bscscan.com/address/0x1df41ed76dceb477fd18b173de4b0a563577493a"
            rel="noreferrer"
            target="_blank"
            className="announcement-link text_underline"
          >
            <MegaphoneFill /> {`PRE SALE WILL END IN ${timer}`}
          </a>
        )} */}
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
          <span className="navbar-toggle-icon"> &nbsp; </span>
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
              href={Whitepaper}
              rel="noreferrer"
              target="_blank"
              className="navbar-menu"
              onClick={closeCollapsibleMenu}
            >
              Whitepaper
            </a>

            <a
              href="https://www.youtube.com/channel/UCbAjafnThbqu0bQGSc9m5Sg"
              rel="noreferrer"
              target="_blank"
              className="navbar-menu"
              onClick={closeCollapsibleMenu}
            >
              Tutorials
            </a>
            <a
              href="https://app.kpop-digital.com/"
              rel="noreferrer"
              target="_blank"
              className="how-to-buy-button"
              onClick={closeCollapsibleMenu}
            >
              Launch APP
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
