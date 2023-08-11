import "./rental.css";
import Img2 from "../../assets/img2.png";
import ScrollAnimation from "react-animate-on-scroll";

const Rental = () => {
  function changeImg() {}

  return (
    <ScrollAnimation animateIn="fadeIn">
      <section id="rentals">
        <div className="rentals-container">
          <div className="retails-info-title">
            <h1>
              Tesla Model 3
            </h1>
          </div>
          <div className="rentalcar-image">
            <img src={Img2} alt="tesla" id="teslamodel3" />
          </div>
          <div className="rentals-cta">
            <button onClick={changeImg}>
              <a href='#info-title' alt='tesla'>View Tesla Models</a></button>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Rental;
