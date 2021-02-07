import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/img/slider/1.jpeg";
import slider2 from "../../assets/img/slider/2.jpeg";

const Slider = () => {
  return (
    <div className="container-slider">
      <Carousel touch={true} slide={true} pause={"hover"}>
        <Carousel.Item interval={5000}>
          <img className="d-block" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block" src={slider1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
