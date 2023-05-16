import React from "react";
import { fakeData } from "../utils/fakeData";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const producto = fakeData[id - 1];

  return (
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 bg-white rounded" style={{ width: "20rem" }}>
        <img
          style={{ height: "300px" }}
          src={producto.imagen[0].url}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-text">{producto.nombre}</h5>
          <p class="card-text">{producto.descripcion}</p>
          <h3 class="card-text">${producto.precio}</h3>
          <p class="card-text">{producto.valoracion}</p>
          <button id="botonCompra${element.id}" class="btn btn-info">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
