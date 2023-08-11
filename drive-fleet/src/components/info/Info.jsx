import React from "react";
import "./info.css";
import ScrollAnimation from "react-animate-on-scroll";
import Img12 from "../../assets/img12.webp";
import Img13 from "../../assets/teslamd.png";
import Img14 from "../../assets/teslax.png";
import Img15 from "../../assets/teslay.png";

const Info = () => {

  return (
    <ScrollAnimation animateIn="fadeIn">
      <section>
        <div className="info">
          <div id="info-title">
            <h1>
              <span>Tesla</span> Models
            </h1>
            <small>Find the vehicle that suits you</small>
          </div>
        </div>
        <div className="info-container">
          <div className="info-card">
            <div className="info-image">
              <img src={Img12} alt="teslas" />
              <div className="info-details">
                <button>Tesla Model S</button>
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-image">
              <img src={Img13} alt="teslas" />
              <div className="info-details">
                <button>Tesla Model 3</button>
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-image">
              <img src={Img14} alt="teslas" />
              <div className="info-details">
                <button>Tesla Model X</button>
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-image">
              <img src={Img15} alt="teslas" />
              <div className="info-details">
                <button>Tesla Model Y</button>
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-image">
              <img src={Img15} alt="teslas" />
              <div className="info-details">
                <button>Tesla Model S Plaid</button>
              </div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-image">
              <img src={Img12} alt="testlas" />
              <div className="info-details">
                <button>Model S Performance</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Info;
