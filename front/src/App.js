import { BASE_ROUTE } from "./rutas";
import { React, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Carrito from "./components/Carrito";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./commons/Footer";
import axios from "axios";
import { setUser } from "./state/user";
import { useDispatch } from "react-redux";
import ProductDetail from "./components/ProductDetail.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/users/me`, { withCredentials: true })
      .then((resp) => dispatch(setUser(resp.data)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      //* este es el color que debo modificar del fondo
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
