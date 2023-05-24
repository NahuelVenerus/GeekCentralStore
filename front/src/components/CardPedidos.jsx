import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CartPedidos = ({ pedido }) => {
  console.log("product", pedido.cart_product);
  const products = pedido.cart_product;
  const user = pedido.user;
  const totalAmount = products.reduce((total, product) => {
    return total + product.product.price * product.quantity;
  }, 0);

  return (
    <Card style={{ marginTop: "5%" }}>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>Pedido de {user.name}</Card.Title>
            <p style={{ height: "10%" }}></p>
            <p>Email: {user.email}</p>
            <p style={{ height: "10%" }}></p>
            <p>Address: {user.address}</p>
          </Col>
          <Col>
            <Card.Subtitle className="mb-2 text-muted">Products</Card.Subtitle>
            {products.map((product) => (
              <div key={product.product.id}>
                <p>Name: {product.product.name}</p>
                <p>Price: {product.product.price}</p>
                <p>Quantity: {product.product.quantity}</p>
              </div>
            ))}
            <Card.Subtitle className="mb-2 text-muted">
              Total Amount
            </Card.Subtitle>
            <p>{totalAmount}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartPedidos;
