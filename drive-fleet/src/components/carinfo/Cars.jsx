import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./cars.css";
import Img20 from "../../assets/pexels-david-gari-morera-9300916 (1).jpg";
import teslaImg from '../../assets/pexels-kindel-media-9799992.jpg';

const Cars = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <section>
        <div className="carinfo-container">
          <div id="car-info-title" className="info-titles2">
            <h2>How we work</h2>
            <div id="car-info-details" className="info-sec">
              <p>
                "At CarViewX, our mission is to provide you with <br></br>an
                exceptional car viewing experience that
                <br></br>simplifies the process of finding your dream car.
                <br></br>Our user-friendly platform is designed to make the
                search
                <br></br>for your perfect vehicle enjoyable and efficient. "
              </p>
              <div className="line"></div>
            </div>
          </div>
          <div className="car-image">
            <div className="solo-card">
              <img src={Img20} alt="tesla" className="tesla-image" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="car-image1">
          <div className="solo-card">
            <img src={teslaImg} alt="tesla" className="tesla-image" />
          </div>
          <div id="car-info-title" className="info-titles">
            <h2>What we offer</h2>
            <div id="car-info-details" className="detailsp">
              <p>
                "At Drive Fleet, Our goal is to provide automotive enthusiasts <br></br>
                and prospectivebuyers 
                come together for a truly exceptional <br></br>experience. 
                Our platform offers a seamless and user-friendly <br></br>interface 
                hat allows you to explore an extensive range of vehicles <br></br>
                from the comfort of your own space. With high-resolution images <br></br>
                and detailed specifications,"
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Cars;
