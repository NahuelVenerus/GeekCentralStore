import React from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import { fakeData } from "../utils/fakeData";
import CarouselCard from "./CarouselCard";

function Carrito() {
  const productos = [...fakeData];

  return (
    <Carousel>
      {productos.map((p) => {
        <CarouselCard producto={p} />;
      })}
    </Carousel>
  );
}

export default Carrito;
