import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
// import { fakeData } from "../utils/fakeData";
// import CarritoCard from "../commons/CarritoCard";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation]);

SwiperCore.use([Navigation]);

export default function ShoppingCart() {
  const products = useSelector((state) => state.ShoppingCart);
  console.log(products);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
    >
      {/*   {products.map((product) => (
        <SwiperSlide key={product.id}>
          <CarritoCard product={product} />
        </SwiperSlide>
      ))} */}
      <div ref={navigationPrevRef} className="swiper-button-prev" />
      <div ref={navigationNextRef} className="swiper-button-next" />
    </Swiper>
  );
}
