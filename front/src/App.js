import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carrito from "./components/Carrito";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./commons/Footer";
import ProductDetail from "./components/ProductDetail.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
