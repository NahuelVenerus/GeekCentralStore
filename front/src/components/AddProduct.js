import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
// import { useDispatch } from "react-redux";
// import { setProductList } from "../state/productList";

const AddProduct = () => {
  const name = useInput();
  const description = useInput();
  const price = useInput();
  const rating = useInput();
  const image = useInput();
  // const dispatch = useDispatch();

  const onSubmit = () => {
    axios.post(`${BASE_ROUTE}/api/products/add`, {
      name: name.value,
      description: description.value,
      price: price.value,
      rating: rating.value,
      image: image.value,
    });
    // axios
    //   .get(`${BASE_ROUTE}/api/products`)
    //   .then((res) => dispatch(setProductList(res.data)));
  };

  return (
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      {/* <button
        class="btn btn-primary me-md-2"
        type="button"
        onClick={handleAddProduct}
      >
        Agregar producto
      </button> */}

      <form onSubmit={onSubmit}>
        <label>
          Product name
          <input {...name} type="text" />
        </label>

        <br />
        <br />

        <label>
          Description
          <input {...description} type="text" />
        </label>

        <br />
        <br />

        <label>
          Price
          <input {...price} type="number" />
        </label>

        <br />
        <br />
        <label>
          Rating
          <input {...rating} type="number" />
        </label>

        <br />
        <br />
        <label>
          Image
          <input {...image} type="url" />
        </label>

        <br />
        <br />

        <button type="submit">Agregar producto</button>
      </form>
    </div>
  );
};

export default AddProduct;
