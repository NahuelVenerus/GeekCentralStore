import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";

function SignUp() {
  const nombre = useInput();
  const nickname = useInput();
  const apellido = useInput();
  const direccion = useInput();
  const codigoPostal = useInput();
  const ciudad = useInput();
  const email = useInput();
  const contrasenia = useInput();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_ROUTE}/api/users/signup`,
        {
          nombre: nombre.value,
          nickname: nickname.value,
          apellido: apellido.value,
          direccion: direccion.value,
          codigoPostal: codigoPostal.value,
          ciudad: ciudad.value,
          email: email.value,
          contrasenia: contrasenia.value,
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
        <input {...nombre} type="text" />
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
        <input {...apellido} type="text" />
      </label>

      <br />
      <br />

      <label>
        Direccion
        <input {...direccion} type="text" />
      </label>

      <br />
      <br />

      <label>
        Codigo Postal
        <input {...codigoPostal} type="text" />
      </label>

      <br />
      <br />

      <label>
        Ciudad
        <input {...ciudad} type="text" />
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
        <input {...contrasenia} type="text" />
      </label>

      <br />
      <br />

      <input type="submit" />
    </form>
  );
}

export default SignUp;
