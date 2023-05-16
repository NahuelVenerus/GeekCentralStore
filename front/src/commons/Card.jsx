import React from "react";
import { Link } from "react-router-dom";

const Card = ({ nombre, precio, imagen, id }) => {
  return (
    <div class="col d-flex justify-content-center mb-4">
      <Link style={{ textDecoration: "none" }} to={`/productDetail/${id}`}>
        <div
          class="card shadow mb-1 bg-white rounded"
          style={{ width: "20rem" }}
        >
          <img
            style={{ height: "300px" }}
            src={imagen[0].url}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-text">${precio}</h5>
            <h5 class="card-text">{nombre}</h5>
            <button id="botonCompra${element.id}" class="btn btn-info">
              Comprar
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
