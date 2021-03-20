import React from "react";
import akershus from "../../../../assets/akershus01.jpg";
import akershus1 from "../../../../assets/akershus1.jfif";
import akershus2 from "../../../../assets/akershus2.jpg";
import Carousel from "react-bootstrap/Carousel";

const carousel = (props) => (
  <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img  className="d-block w-100 " width='100' src={akershus} alt="First slide" />
        <Carousel.Caption>
          <h3>Akershus castle</h3>
          <p>
            The site helps you to find public establishments in Oslo Akershus.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={akershus1} alt="Second slide" />
        <Carousel.Caption>
          <h3>Akershus castle</h3>
          <p>
            The site helps you to find public establishments in Oslo Akershus.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={akershus2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Akershus castle</h3>
          <p>
            The site helps you to find public establishments in Oslo Akershus.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
);

export default carousel;
