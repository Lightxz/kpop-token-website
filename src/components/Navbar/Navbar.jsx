import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Logo from "images/logo.png";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const scrollCallBack = () => {
      setIsStickyNav(window.pageYOffset > 10);
    };

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      setIsStickyNav(false);
    };
    // eslint-disable-next-line
  }, []);

  const toggleCollapsibleMenu = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const closeCollapsibleMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`navbar-wrapper ${
        (isStickyNav || isExpanded) && "isStickyNav"
      }`}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={isExpanded}
        variant="dark"
        className={`navbar-container`}
      >
        <Navbar.Brand as="span" href="#home">
          <div className="navbar-logo">
            <img src={Logo} alt="$KPOP" />
            <p className="mb-0">$KPOP</p>
          </div>
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
            <Link
              to="howToBuy"
              activeClass="active-navbar-link"
              spy={true}
              smooth={true}
              duration={250}
              className="navbar-menu"
              offset={-100}
              onClick={closeCollapsibleMenu}
            >
              HOW TO BUY
            </Link>
          </div>
          <div className="navbar-links">
            <a className="navbar-link" href="#">
              Twitter
            </a>
            <a className="navbar-link" href="#">
              Medium
            </a>
            <a className="navbar-link" href="#">
              Telegram
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
