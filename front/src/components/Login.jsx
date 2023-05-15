import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";

function Login() {
  const handleSubmit = () => {
    axios
      .post(`${BASE_ROUTE}/api/users/login`, { withCredentials: true })
      .then((user) => console.log(user.data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input type="text" />
      </label>

      <br />
      <br />

      <label>
        Nombre
        <input type="text" />
      </label>

      <br />
      <br />

      <button>Ingresar</button>
    </form>
  );
}

export default Login;
