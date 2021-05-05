import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">logo here</div>
      <div className="navbar-menus">
        <a className="navbar-menu" href="#">
          HOME
        </a>
        <a className="navbar-menu" href="#">
          ABOUT
        </a>
        <a className="navbar-menu" href="#">
          FAN TOKENS
        </a>
        <a className="navbar-menu" href="#">
          ROADMAP
        </a>
        <a className="navbar-menu" href="#">
          HOW TO BUY
        </a>
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
