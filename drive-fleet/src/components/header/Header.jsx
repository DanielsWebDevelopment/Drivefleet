import React from "react";
import "./header.css";
import ScrollAnimation from "react-animate-on-scroll";
import Img1 from "../../assets/img1.png";

const Header = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <header>
        <div className="header-container">
          <div className="main-title">
            <h1>
              <span>Car</span>viewings
            </h1>
            <small>
              Rent out your favorite vehicle<br></br>
              at an extremely low price
            </small>
            <a href="#info-title">View Vehicles</a>
          </div>
          <div className="main-image">
            <img src={Img1} alt="tesla" />
          </div>
        </div>
      </header>
    </ScrollAnimation>
  );
};

export default Header;
