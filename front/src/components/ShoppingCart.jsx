import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { BASE_ROUTE } from "../rutas";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

SwiperCore.use([Navigation]);

SwiperCore.use([Navigation]);

export default function ShoppingCart() {
  const products = useSelector((state) => state.ShoppingCart);
  console.log(products);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const dispach = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/shopping-cart`)
      .then((res) => console.log(res))
      .catch((error) => console.log("Hay un error"));
  }, []);

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
