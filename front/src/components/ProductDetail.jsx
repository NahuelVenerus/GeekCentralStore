import axios from "axios";
import { useParams } from "react-router";
import { BASE_ROUTE } from "../rutas";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { nickname } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/cart-products/add`, {
        id: id,
        nickname: nickname,
      })
      .then(() => {
        Swal.fire({
          text: "Producto agregado al carrito con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: "El producto no se pudo agregar al carrito",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        navigate("/");
        console.log(error);
      });
  };

  const fetchProduct = (id) => {
    axios
      .get(`${BASE_ROUTE}/api/products/${id}`)
      .then((fetchedProduct) => {
        setProduct(fetchedProduct.data);
        console.log("fetched product", fetchedProduct.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <Card className="mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Card.Img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-between">
          <Card.Body>
            <Card.Title className="mb-4" style={{ fontSize: "80px" }}>
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text
              className="mb-3"
              style={{
                fontSize: "18px",
                marginLeft: "20%",
                textAlign: "left",
              }}
            >
              {product.description}
            </Card.Text>
          </Card.Body>
          <div className="mt-auto">
            <Card.Text
              style={{
                fontSize: "22px",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              <strong style={{ fontSize: "18px" }}>${product.price}</strong>
            </Card.Text>

            <Button
              className="btn btn-info"
              onClick={handleAdd}
              variant="info"
              style={{ fontSize: "20px", marginBottom: "5%" }}
            >
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetail;
