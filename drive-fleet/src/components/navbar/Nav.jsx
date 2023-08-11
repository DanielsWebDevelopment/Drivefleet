
import React from "react";
import "./nav.css";

const Nav = () => {

  return (
    <nav className="navbar">
      <a href="index.html" className="logo">
        <span>Drive</span>Fleet
      </a>

      <ul className="navbar">
        <li>
          <a href="/home" className="nav-items">
            Home
          </a>
        </li>
        <li>
          <a href="#rentals" className="nav-items">
            Vehicles
          </a>
        </li>
        <li>
          <a href="#details-title" className="nav-items">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
