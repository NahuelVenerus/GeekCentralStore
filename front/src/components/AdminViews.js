import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const AdminViews = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4} className="mb-4">
          <Link to="/admin-products" className="card-link">
            <Card>
              <Button
                className="admin-button"
                style={{
                  height: "500px",
                  fontSize: "300%",
                }}
              >
                Productos
              </Button>
              <Card.Text>
                Aquí puedes ver, editar y eliminar los productos!
              </Card.Text>
            </Card>
          </Link>
        </Col>
        <Col md={4} className="mb-4">
          <Link
            to="/admin-order"
            className="card-link"
            style={{ textDecoration: "none" }}
          >
            <Card>
              <Button
                className="admin-button"
                style={{
                  height: "500px",
                  fontSize: "300%",
                  backgroundColor: "#EF233C",
                }}
              >
                Pedidos
              </Button>
              <Card.Text>
                Aquí puedes ver los pedidos de todos los usuarios!
              </Card.Text>
            </Card>
          </Link>
        </Col>
        <Col md={4} className="mb-4">
          <Link
            to="/admin/manage-users"
            className="card-link"
            style={{ textDecoration: "none" }}
          >
            <Card>
              <Button
                className="admin-button"
                style={{
                  height: "500px",
                  fontSize: "300%",
                  backgroundColor: "#59cd90",
                }}
              >
                Usuarios
              </Button>
              <Card.Text>
                Aquí puedes ver, editar y eliminar los usuarios!
              </Card.Text>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminViews;
