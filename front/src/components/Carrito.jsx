import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { fakeData } from "../utils/fakeData";
import CarritoCard from "../commons/CarritoCard";

export default function Carrito() {
  const products = fakeData;

  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <CarritoCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
