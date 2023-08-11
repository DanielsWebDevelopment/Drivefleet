import React from "react";
import "./about.css";

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-card"></div>
        <div className="inner-about-card">
          <a href="#info-title">View Vehicles</a>
        </div>
        <div className="inner-about-card">
          <a href="#vehicles">Find a Model</a>
        </div>
        <div className="inner-about-card">
          <a href="#car-info-title">More Info</a>
        </div>
      </div>
      <div id="brands-title">
        <h1>View<span> Insights</span></h1>
      </div>
      <div className="brands-container">
        <div className="info-cards">
          <small>Most Popular brands</small>
          <h2>Tesla Model<br></br>Tesla Tesla Performance</h2>
        </div>
        <div className="info-cards">
          <small>Most Popular Model</small>
          <h2>Tesla Model S <br></br>
          Tesla Model X
          <br></br>Tesla Model Y
          <br></br>Tesla Semi</h2>
          
        </div>
        <div className="info-cards">
          <small>Car Details</small>
          <h2> - Equipped with a driver assistance <br></br>
          system called Autopilot<br></br>
          - The feature enables a car to <br></br>steer. 
          accelerate, and brake automatically within its lane
          </h2>
        </div>
        <div className="info-cards">
          <small>Vehicle Type</small>
          <h2>Electric Motor</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
