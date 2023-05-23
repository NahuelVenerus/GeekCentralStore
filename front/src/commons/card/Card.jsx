import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_ROUTE } from "../../rutas";
import { useSelector } from "react-redux";

const Card = ({ name, price, image, id }) => {
  const { nickname } = useSelector((state) => state.user);

  const handlerAdd = (e) => {
    e.preventDefault();
    console.log("ID", id, "NICKNAME", nickname);
    console.log(`${BASE_ROUTE}/api/cart-products/add`);
    axios
      .post(`${BASE_ROUTE}/api/cart-products/add`, {
        id: id,
        nickname: nickname,
      })
      .then((res) => console.log("Me TRAE PRODUCTOS", res.data))
      .catch((error) => {
        console.log("error axios front");
      });
  };

  return (
    <div className="col d-flex justify-content-center mb-4">
      <div
        className="card pink-shadow mb-1 bg-white rounded"
        style={{ width: "20rem" }}
      >
        <Link style={{ textDecoration: "none" }} to={`/product-detail/${id}`}>
          <img
            style={{ height: "300px" }}
            src={image}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h5 className="card-text">${price}</h5>
          <h5 className="card-text">{name}</h5>
          <button className="btn btn-info" onClick={handlerAdd}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
