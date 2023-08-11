import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h2>Company</h2>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Vehicles</a>
                </li>
                <li>
                  <a href="#home">About Us</a>
                </li>
                <li>
                  <a href="#home">Service</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>About Us</h2>
              <ul>
                <li>
                  <a href="#home">FAQs</a>
                </li>
                <li>
                  <a href="#home">Testimonials</a>
                </li>
                <li>
                  <a href="#home">Updates</a>
                </li>
                <li>
                  <a href="#home">News</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Customer Service</h2>
              <ul>
                <li>
                  <a href="#home">Get Support</a>
                </li>
                <li>
                  <a href="#home">More Info</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h2>Privacy</h2>
              <ul>
                <li>
                  <a href="#home">Priacy Policy</a>
                </li>
                <li>
                  <a href="#home">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
