import { BASE_ROUTE } from "./rutas";
import { React, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./commons/Footer";
import axios from "axios";
import { setUser } from "./state/user";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./components/ProductDetail.jsx";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/users/me`, { withCredentials: true })
      .then((resp) => dispatch(setUser(resp.data)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
