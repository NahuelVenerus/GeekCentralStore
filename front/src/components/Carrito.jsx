import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import CarritoCard from "../commons/CarritoCard";
import { fakeData } from "../utils/fakeData";

SwiperCore.use([Navigation]);

export default function Carrito() {
  const products = fakeData;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <CarritoCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={navigationPrevRef} className="swiper-button-prev" />
      <div ref={navigationNextRef} className="swiper-button-next" />
    </div>
  );
}
