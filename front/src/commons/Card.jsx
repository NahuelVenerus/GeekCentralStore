import React from "react";
import { Link } from "react-router-dom";

const Card = ({ nombre, precio, imagen, id }) => {
  return (
    <div className="col d-flex justify-content-center mb-4">
      <Link style={{ textDecoration: "none" }} to={`/productDetail/${id}`}>
        <div
          className="card shadow mb-1 bg-white rounded"
          style={{ width: "20rem" }}
        >
          <img
            style={{ height: "300px" }}
            src={imagen[0].url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-text">${precio}</h5>
            <h5 className="card-text">{nombre}</h5>
            <button className="btn btn-danger">+</button>

            <button className="btn btn-danger">-</button>
          </div>
          <button className="btn btn-info">Comprar</button>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            id="cantidadEntradas"
          >
            0
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
