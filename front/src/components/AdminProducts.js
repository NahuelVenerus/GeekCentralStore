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
  //const [product, setProduct] = useState([]);
  // console.log(product, "products");

  useEffect(() => {
    axios.get(`${BASE_ROUTE}/api/products`).then((res) => {
      console.log("RESS", res.data);
      dispatch(setProductList(res.data));
    });
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
      <button className="btn btn-primary me-md-2" type="button">
        <Link to="/add-product" style={{ color: "white" }}>
          Add product
        </Link>
      </button>
    </div>
  );
};

export default AdminProducts;
