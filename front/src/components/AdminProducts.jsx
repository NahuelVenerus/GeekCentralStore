import React, { useEffect } from "react";
import Card from "../commons/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { setProductList } from "../state/productList";

const AdminProducts = () => {
  const products = useSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/products`)
      .then((res) => dispatch(setProductList(res.data)));
  }, [dispatch]);

  return (
    <div>
      {products.length > 0 ? (
        <>
          {products.map((element) => (
            <Card key={element.id} {...element} />
          ))}
        </>
      ) : (
        <h1>No products in stock </h1>
      )}
      <Link to="/add-product" style={{ color: "white" }}>
        <button className="btn btn-primary me-md-2" type="button">
          Add product
        </button>
      </Link>
    </div>
  );
};

export default AdminProducts;
