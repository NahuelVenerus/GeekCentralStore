import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import CarritoCard from "../commons/CarritoCard";
import { BASE_ROUTE } from "../rutas";
import { setAdd } from "../state/shoppingCart";
import axios from "axios";
import { useParams } from "react-router";

SwiperCore.use([Navigation]);

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [deletedProduct, setDeletedProduct] = useState({});
  const { nickname } = useParams();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const fetchCarts = () => {
    axios
      .get(`${BASE_ROUTE}/api/users/shopping-cart/${nickname}`)
      .then((products) => {
        console.log("products", products);
        setProducts(products.data.cart_product);
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
              <CarritoCard
                cartProduct={p}
                setDeletedProduct={setDeletedProduct}
              />
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
