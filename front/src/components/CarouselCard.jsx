import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselCard({ producto }) {
  return (
    <Carousel.Item>
      <img
        className="d-block w-100 h-30"
        src={producto.imagen[0].url}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default CarouselCard;
