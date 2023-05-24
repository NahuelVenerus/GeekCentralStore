import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Login() {
  const nickname = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_ROUTE}/api/users/login`,
        {
          nickname: nickname.value,
          password: password.value,
        },
        { withCredentials: true }
      )
      .then((user) => {
        dispatch(setUser(user.data));
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container-fluid p-3" style={{ background: "#2B2D42" }}>
      <Card className="container p-3 card-form " style={{ width: "20rem" }}>
        <Form className="container" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              {...nickname}
              type="text"
              placeholder="User"
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              {...password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className="button-card"
            style={{ background: "#120910" }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );

  // {
  /* <form onSubmit={handleSubmit}>
        <label>
          Nickname
          <input {...nickname} type="text" />
        </label>

        <br />
        <br />

        <label>
          Contraseña
          <input {...password} type="password" />
        </label>

        <br />
        <br />

        <button>Ingresar</button>
      </form>
  </div> */
  // }
}

export default Login;
