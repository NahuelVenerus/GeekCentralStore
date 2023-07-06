import React from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddProduct = () => {
  const name = useInput();
  const description = useInput();
  const price = useInput();
  const rating = useInput();
  const image = useInput();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/products/add`, {
        name: name.value,
        description: description.value,
        price: price.value,
        rating: rating.value,
        image: image.value,
      })
      .then(() => {
        Swal.fire({
          text: "Producto creado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate(`/admin-products`);
      });
  };

  return (
    <div className="container-fluid p-3" style={{ background: "#2B2D42" }}>
      <Card
        className="container-fluid p-3 card-form "
        style={{ width: "50rem" }}
      >
        <Form className="container" onSubmit={onSubmit}>
          <div className="row">
            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control {...name} type="text" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...description}
                as="textarea"
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group className="mb-3 p-2 col-6" controlId="formBasicEmail">
              <Form.Label>Price</Form.Label>
              <Form.Control {...price} type="number" placeholder="price" />
            </Form.Group>
            <Form.Group className="mb-3 p-2 col-6" controlId="formBasicEmail">
              <Form.Label>Rating</Form.Label>
              <Form.Control {...rating} type="number" placeholder="rating" />
            </Form.Group>
            <Form.Group className="mb-3 p-2 " controlId="formBasicEmail">
              <Form.Label>URL image</Form.Label>
              <Form.Control {...image} type="url" placeholder="image" />
            </Form.Group>
            <Button
              className="button-card"
              style={{ background: "#120910" }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddProduct;
