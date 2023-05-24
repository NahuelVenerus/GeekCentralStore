import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import CarritoCard from "../commons/CarritoCard";
import { BASE_ROUTE } from "../rutas";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setFinalPrice } from "../state/finalPrice";
import Button from "react-bootstrap/esm/Button";
import Swal from "sweetalert2";

SwiperCore.use([Navigation]);

export default function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [deletedProduct, setDeletedProduct] = useState({});
  const [editado, setEditado] = useState(false);
  const { nickname } = useParams();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const finalPrice = useSelector((state) => state.finalPrice);
  const [total, setTotal] = useState(finalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchCarts = async () => {
    try {
      const createdCart = await axios.get(
        `${BASE_ROUTE}/api/users/shopping-cart/${nickname}`
      );
      createdCart.data.cart_product?.sort(function (a, b) {
        return a.productId - b.productId;
      });
      setProducts(createdCart.data.cart_product);
      if (createdCart.data.cart_product)
        getTotal(createdCart.data.cart_product);
    } catch (error) {
      throw Error(error);
    }
  };

  const handleBuy = () => {
    axios
      .post(`${BASE_ROUTE}/api/orders/create`, {
        total: total,
        shoppingCartId: products[0].shoppingCartId,
        nickname: nickname,
      })
      .then(() => {
        navigate("/");
        setTotal(0);
        Swal.fire({
          text: "Compra realizada con éxito!",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      })
      .catch((err) => console.log(err));
  };

  const getTotal = (prods) => {
    let total = 0;
    for (const p of prods) {
      total += p.quantity * p.product.price;
    }
    return setTotal(total);
  };

  useEffect(() => {
    fetchCarts();
  }, [nickname, deletedProduct, editado]);

  useEffect(() => {
    dispatch(setFinalPrice(total));
  }, [total]);

  useEffect(() => {
    setTotal(finalPrice);
  }, [finalPrice]);

  return (
    <div>
      {products ? (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {products?.map((p) => (
            <SwiperSlide key={p.id}>
              <CarritoCard
                cartProduct={p}
                setDeletedProduct={setDeletedProduct}
                total={total}
                setTotal={setTotal}
                editado={editado}
                setEditado={setEditado}
              />
            </SwiperSlide>
          ))}
          <div ref={navigationPrevRef} className="swiper-button-prev" />
          <div ref={navigationNextRef} className="swiper-button-next" />
          {products[0] ? (
            <div>
              <h1 style={{ color: "white" }}>Total: ${finalPrice}</h1>
              <Button onClick={handleBuy}>Comprar</Button>
            </div>
          ) : (
            <h1>El carrito está vacío</h1>
          )}
        </Swiper>
      ) : (
        <h1>El carrito está vacío</h1>
      )}
    </div>
  );
}
