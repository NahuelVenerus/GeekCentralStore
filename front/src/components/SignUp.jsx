import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";

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
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input {...name} type="text" />
      </label>

      <br />
      <br />

      <label>
        Nickname
        <input {...nickname} type="text" name="" id="" />
      </label>

      <br />
      <br />

      <label>
        Apellido
        <input {...lastName} type="text" />
      </label>

      <br />
      <br />

      <label>
        Direccion
        <input {...address} type="text" />
      </label>

      <br />
      <br />

      <label>
        Codigo Postal
        <input {...zip_code} type="text" />
      </label>

      <br />
      <br />

      <label>
        Ciudad
        <input {...city} type="text" />
      </label>

      <br />
      <br />

      <label>
        Email
        <input {...email} type="text" />
      </label>

      <br />
      <br />

      <label>
        Contraseña
        <input {...password} type="password" />
      </label>

      <br />
      <br />

      <input type="submit" />
    </form>
  );
}

export default SignUp;
