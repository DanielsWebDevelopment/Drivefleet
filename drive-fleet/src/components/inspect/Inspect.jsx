import React from "react";
import { useState } from 'react';
import "./inspect.css";
import InspectImg from "../../assets/IntX3.jpg";
import InspectImg1 from "../../assets/IntmY.jpg";
import InspectImg2 from "../../assets/intXS.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import inspectImg3 from '../../assets/pexels-screen-post-12561394.jpg'

const Inspect = () => {

  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <ScrollAnimation animateIn="fadeIn">
      <section>
        <div className="inspect-title">
          <h1>Listings</h1>
          <div className="line1"></div>
        </div>
        <div className="listings-container">
          <div className="listing-card">
            <div id="listing-image">
              <img src={InspectImg} alt="tesla" />
            </div>
            <div class="image-details">
              <h3>Model:</h3>
              <small>Tesla Model X</small>
            </div>
            <div className="image-details-specs open">
              <div className="listings-cta">
                <button onClick={toggleTextVisibility}>
                  {isTextVisible ? 'Hide Text' : 'View Details'}
                </button>
              </div>
                {isTextVisible && <small className="faq-answer">
                  The Model X comes standard with a battery large enough <br></br>
                  to cover a claimed 348-mile driving range;
                </small>}
            </div>
          </div>

          <div className="listing-card">
            <div id="listing-image">
              <img src={InspectImg1} alt="tesla" />
            </div>
            <div class="image-details">
              <h3>Model:</h3>
              <small>Tesla Model Y</small>
            </div>
            <div className="image-details-specs">
              <div className="listings-cta">
                <button onClick={toggleTextVisibility}>
                  {isTextVisible ? 'Hide Text' : 'View Details'}
                </button>
              </div>
              {isTextVisible &&<small className="faq-answer">
                The Model Y Long Range with all-wheel drive presents <br></br>
                an impressive range of 330 miles, while the Performance
                <br></br>
                variant showcases a slightly reduced estimated range of -
                <br></br>
                03 miles. <br></br>The Model Y centralizes nearly all<br></br>
                operations within its expansive, sleek infotainment screen
                positioned <br></br>
                at the heart of the dashboard. From regulating climate <br></br>
                settings to displaying the speedometer, this comprehensive
                <br></br>
                display serves as the control hub for a wide array of functions.
              </small>}
            </div>
          </div>

          <div className="listing-card">
            <div id="listing-image">
              <img src={InspectImg2} alt="tesla" />
            </div>
            <div class="image-details">
              <h3>Model:</h3>
              <small>Tesla Model S</small>
            </div>
            <div className="image-details-specs">
              <div className="listings-cta">
                <button onClick={toggleTextVisibility}>
                  {isTextVisible ? 'Hide Text' : 'View Details'}
                </button>
              </div>
              {isTextVisible &&<small className="faq-answer">
                Equipped with individual electric motors for <br></br>
                both front and rear axles, the Model S ensures constant{" "}
                <br></br>
                all-wheel drive, irrespective of the chosen version.
                <br></br>The acceleration performance across different
                <br></br>models spans from exceptional to truly astonishing.
              </small>}
            </div>
          </div>

          <div className="listing-card">
            <div id="listing-image">
              <img src={inspectImg3} alt="tesla" />
            </div>
            <div class="image-details">
              <h3>Model:</h3>
              <small>Tesla Model S</small>
            </div>
            <div className="image-details-specs">
              <div className="listings-cta">
                <button onClick={toggleTextVisibility}>
                  {isTextVisible ? 'Hide Text' : 'View Details'}
                </button>
              </div>
              {isTextVisible &&<small className="faq-answer">
                Equipped with individual electric motors for <br></br>
                both front and rear axles, the Model S ensures constant{" "}
                <br></br>
                all-wheel drive, irrespective of the chosen version.
                <br></br>The acceleration performance across different
                <br></br>models spans from exceptional to truly astonishing.
              </small>}
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Inspect;
