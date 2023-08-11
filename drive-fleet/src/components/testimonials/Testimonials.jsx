import React from "react";
import "./testimonials.css";
import ScrollAnimation from "react-animate-on-scroll";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section id="testimonials">
        <div className="testimonials-heading">
          <h1>
            <span>Test</span>imoninals
          </h1>
        </div>
        <div className="test-container testimonials__container">
          <div className="testimonial">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              voluptatem ipsum at,<br></br>
              voluptates iusto. Culpa adipisci quos quae neque a accusantium
              perspiciatis."
            </p>
            <div className="testimonials__client">
              <div className="test-image">
                <img src={img7} alt="testimonials" />
              </div>
              <div className="testimonials-work">
                <p>Micheal Brian</p>
                <small>Travel Advisor</small>
                <div className="testimonials-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              voluptatem ipsum at,<br></br>
              voluptates iusto. Culpa adipisci quos quae neque a accusantium
              perspiciatis."
            </p>
            <div className="testimonials__client">
              <div className="test-image">
                <img src={img8} alt="testimonials" />
              </div>
              <div className="testimonials-work">
                <p>Amir Cobleal</p>
                <small>Travel Advisor</small>
                <div className="testimonials-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              voluptatem ipsum at,<br></br>
              voluptates iusto. Culpa adipisci quos quae neque a accusantium
              perspiciatis."
            </p>
            <div className="testimonials__client">
              <div className="test-image">
                <img src={img9} alt="testimonials" />
              </div>
              <div className="testimonials-work">
                <p>Jose Minwardo</p>
                <small>Travel Advisor</small>
                <div className="testimonials-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              voluptatem ipsum at,<br></br>
              voluptates iusto. Culpa adipisci quos quae neque a accusantium
              perspiciatis."
            </p>
            <div className="testimonials__client">
              <div className="test-image">
                <img src={img10} alt="testimonials" />
              </div>
              <div className="testimonials-work">
                <p>Jennesa Mickay</p>
                <small>Travel Advisor</small>
                <div className="testimonials-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Testimonials;
