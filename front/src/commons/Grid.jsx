import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProductList } from "../state/productList";
import Card from "../commons/card/Card";

const Grid = () => {
  const products = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const fetchProducts = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_ROUTE}/api/products/`)
      .then((products) => {
        dispatch(setProductList(products.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {products.length > 0 ? (
            <>
              {products.map((element) => (
                <Card key={element.id} {...element} />
              ))}
            </>
          ) : (
            <h1>Todavía no hay productos</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default Grid;
