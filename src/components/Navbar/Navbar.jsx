import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">logo here</div>
      <div className="navbar-menus">
        <Link
          to="home"
          activeClass="active-navbar-link"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar-menu"
          offset={-100}
        >
          HOME
        </Link>
        <Link
          to="about"
          activeClass="active-navbar-link"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar-menu"
        >
          ABOUT
        </Link>
        <Link
          to="fanTokens"
          activeClass="active-navbar-link"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar-menu"
        >
          FAN TOKENS
        </Link>
        <Link
          to="roadmap"
          activeClass="active-navbar-link"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar-menu"
        >
          ROADMAP
        </Link>
        <Link
          to="howToBuy"
          activeClass="active-navbar-link"
          spy={true}
          smooth={true}
          duration={500}
          className="navbar-menu"
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
    </nav>
  );
};

export default Navbar;
