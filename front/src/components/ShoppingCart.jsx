import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import CarritoCard from "../commons/CarritoCard";
import { useDispatch, useSelector } from "react-redux";
import { BASE_ROUTE } from "../rutas";
import { setAdd } from "../state/shoppingCart";
import axios from "axios";
import { useParams } from "react-router";

SwiperCore.use([Navigation]);

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shoppingCart);
  const [deletedProduct, setDeletedProduct] = useState({});
  const { nickname } = useParams();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  if (products.product) {
    console.log("product", products.product);
  }

  const fetchCarts = () => {
    axios
      .get(`${BASE_ROUTE}/api/users/shopping-cart/${nickname}`)
      .then((products) => {
        dispatch(setAdd(products.data.product));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCarts();
  }, [nickname, deletedProduct]);

  return (
    <div>
      {products[0] ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <CarritoCard producto={p} setDeletedProduct={setDeletedProduct} />
            </SwiperSlide>
          ))}
          <div ref={navigationPrevRef} className="swiper-button-prev" />
          <div ref={navigationNextRef} className="swiper-button-next" />
        </Swiper>
      ) : (
        <h1>El carrito está vacío</h1>
      )}
    </div>
  );
}
