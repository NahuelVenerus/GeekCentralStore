import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SignUp() {
  const name = useInput();
  const nickname = useInput();
  const lastName = useInput();
  const address = useInput();
  const zip_code = useInput();
  const city = useInput();
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_ROUTE}/api/users/signup`,
        {
          name: name.value,
          nickname: nickname.value,
          lastName: lastName.value,
          address: address.value,
          zip_code: zip_code.value,
          city: city.value,
          email: email.value,
          password: password.value,
        },
        { withCredentials: true }
      )
      .then(() => navigate("/login"))
      .catch((error) => console.error(error));
  };
  return (
    <div className="container-fluid p-3" style={{ background: "#2B2D42" }}>
      <Card
        className="container-fluid p-3 card-form "
        style={{ width: "50rem" }}
      >
        <Form className="container" onSubmit={handleSubmit}>
          <div className="row">
            <Form.Group className="mb-3 p-2 col-6" controlId="formBasicEmail">
              <div className="container">
                <div className="row">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    {...name}
                    type="text"
                    placeholder="name"
                  />
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 p-2 col-6" controlId="formBasicEmail">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                required
                {...lastName}
                type="text"
                placeholder="lastname"
              />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                {...nickname}
                type="text"
                placeholder="username"
              />
            </Form.Group>
            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control required {...city} type="text" placeholder="city" />
            </Form.Group>
            <Form.Group className="mb-3 p-2 col-8" controlId="formBasicEmail">
              <Form.Label>Direction</Form.Label>
              <Form.Control
                required
                {...address}
                type="text"
                placeholder="direction"
              />
            </Form.Group>
            <Form.Group className="mb-3 p-2 col-4" controlId="formBasicEmail">
              <Form.Label>Zip code</Form.Label>
              <Form.Control
                required
                {...zip_code}
                type="number"
                placeholder="code"
              />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                {...email}
                type="mail"
                placeholder="mail"
              />
            </Form.Group>

            <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                {...password}
                type="password"
                placeholder="password"
              />
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
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Nombre
    //     <input {...name} type="text" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Nickname
    //     <input {...nickname} type="text" name="" id="" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Apellido
    //     <input {...lastName} type="text" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Direccion
    //     <input {...address} type="text" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Codigo Postal
    //     <input {...zip_code} type="text" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Ciudad
    //     <input {...city} type="text" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Email
    //     <input {...email} type="email" />
    //   </label>

    //   <br />
    //   <br />

    //   <label>
    //     Contraseña
    //     <input {...password} type="password" />
    //   </label>

    //   <br />
    //   <br />

    //   <input type="submit" />
    // </form>
  );
}

export default SignUp;
