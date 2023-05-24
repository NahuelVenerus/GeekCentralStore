import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useInput from "../hooks/useInput";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useNavigate, useParams } from "react-router";

function EditProduct() {
  const name = useInput();
  const description = useInput();
  const price = useInput();
  const rating = useInput();
  const image = useInput();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`${BASE_ROUTE}/api/admin/edit-product`, {
        name: name.value,
        id: id,
        description: description.value,
        price: price.value,
        rating: rating.value,
        image: image.value,
      })
      .then(() => navigate("/admin-products"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="container-fluid p-3" style={{ background: "#2B2D42" }}>
      <Card
        className="container-fluid p-3 card-form "
        style={{ width: "50rem" }}
      >
        <Form className="container" onSubmit={handleEdit}>
          <div className="row">
            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <Form.Label>Product name</Form.Label>
              <Form.Control {...name} type="text" placeholder="name" />
            </Form.Group>

            <Form.Group className="mb-3 p-2 " controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...description}
                type="text"
                placeholder="description"
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
}

export default EditProduct;
