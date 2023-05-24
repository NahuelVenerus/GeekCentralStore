import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import CarritoCard from "../commons/CarritoCard";
import { BASE_ROUTE } from "../rutas";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setFinalPrice } from "../state/finalPrice";
import Button from "react-bootstrap/esm/Button";

SwiperCore.use([Navigation]);

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [deletedProduct, setDeletedProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { nickname } = useParams();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const finalPrice = useSelector((state) => state.finalPrice);
  const [total, setTotal] = useState(finalPrice);
  const dispatch = useDispatch();
  console.log("final price", finalPrice);

  const fetchCarts = () => {
    axios
      .get(`${BASE_ROUTE}/api/users/shopping-cart/${nickname}`)
      .then((products) => {
        console.log("products", products);
        setProducts(products.data.cart_product);
      })
      .catch((err) => console.log(err));
  };

  const handleBuy = () => {
    console.log("product id", products[0].id);
    axios
      .post(`${BASE_ROUTE}/api/orders/create`, {
        total: total,
        shoppingCartId: products[0].id,
        nickname: nickname,
      })
      .then((order) => console.log("order", order))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCarts();
  }, [nickname, deletedProduct]);

  useEffect(() => {
    dispatch(setFinalPrice(total));
  }, [total]);

  useEffect(() => {
    setTotal(finalPrice);
  }, [finalPrice]);

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
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                total={total}
                setTotal={setTotal}
              />
            </SwiperSlide>
          ))}
          <div ref={navigationPrevRef} className="swiper-button-prev" />
          <div ref={navigationNextRef} className="swiper-button-next" />
          <h1 style={{ color: "white" }}>Total: ${finalPrice}</h1>
          <Button onClick={handleBuy}>Comprar</Button>
        </Swiper>
      ) : (
        <h1>El carrito está vacío</h1>
      )}
    </div>
  );
}
