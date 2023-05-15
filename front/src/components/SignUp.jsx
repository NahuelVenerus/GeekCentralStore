import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import useImput from "../hooks/useImput";

function SignUp() {
  const nombre = useImput();
  const nickname = useImput();
  const apellido = useImput();
  const direccion = useImput();
  const codigoPostal = useImput();
  const ciudad = useImput();
  const email = useImput();
  const contraseña = useImput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/users/signup`, {
        Nombre: nombre.value,
        Nickname: nickname.value,
        Apellido: apellido.value,
        Direccion: direccion.value,
        codigoPostal: codigoPostal.value,
        Ciudad: ciudad.value,
        Email: email.value,
        Contraseña: contraseña.value,
      })
      .then((user) => user)
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
        Nickname
        <input type="text" name="" id="" />
      </label>

      <br />
      <br />

      <label>
        Apellido
        <input type="text" />
      </label>

      <br />
      <br />

      <label>
        Direccion
        <input type="text" />
      </label>

      <br />
      <br />

      <label>
        Codigo Postal
        <input type="text" />
      </label>

      <br />
      <br />

      <label>
        Ciudad
        <input type="text" />
      </label>

      <br />
      <br />

      <label>
        Email
        <input type="text" />
      </label>

      <br />
      <br />

      <label>
        Contraseña
        <input type="text" />
      </label>

      <br />
      <br />

      <input type="submit" />
    </form>
  );
}

export default SignUp;
