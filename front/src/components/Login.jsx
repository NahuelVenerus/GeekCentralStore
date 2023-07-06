import React from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";

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
      .catch((err) => {
        console.log(err);
        alert("Usuario y/o contraseña incorrectos")});
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
}

export default Login;
