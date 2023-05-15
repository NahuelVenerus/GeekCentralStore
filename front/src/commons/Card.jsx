import React from "react";

const Card = ({ name, precio, images }) => {
  return (
    <div>
      <div class="col d-flex justify-content-center mb-4">
        <div
          class="card shadow mb-1 bg-white rounded"
          style={{ width: "20rem" }}
        >
          <img src={images[0].url} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-text">{precio}</h5>
            <p class="card-text">{name}</p>
            <button id="botonCompra${element.id}" class="btn btn-info">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
