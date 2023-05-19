import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, price, image, id }) => {
  return (
    <div className="col d-flex justify-content-center mb-4">
      <Link style={{ textDecoration: "none" }} to={`/product-detail/${id}`}>
        <div
          className="card shadow mb-1 bg-white rounded"
          style={{ width: "20rem" }}
        >
          <img
            style={{ height: "300px" }}
            src={image[0].url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-text">${price}</h5>
            <h5 className="card-text">{name}</h5>
            <button className="btn btn-info">Agregar Carrito</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
