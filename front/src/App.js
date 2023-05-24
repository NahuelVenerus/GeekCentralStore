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
import { useDispatch } from "react-redux";
import ProductDetail from "./components/ProductDetail.jsx";
import Searcher from "./components/Searcher";
import AdminViews from "./components/AdminViews";
import AdminOrder from "./components/AdminOrder";
import AdminProducts from "./components/AdminProducts";
import AddProduct from "./components/AddProduct";
import ManageUsers from "./components/ManageUsers";
import EditProduct from "./components/EditProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/users/me`, { withCredentials: true })
      .then((resp) => dispatch(setUser(resp.data)))
      .catch((error) => console.error(error));
  }, [dispatch]);

  return (
    <div>
      <div className="App container-fluid" style={{ color: "#EF233C" }}>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shopping-cart/:nickname" element={<ShoppingCart />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/search/:name" element={<Searcher />} />
          <Route path="/admin" element={<AdminViews />} />
          <Route path="/admin-products" element={<AdminProducts />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/admin-order" element={<AdminOrder />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/EditProduct/:id" element={<EditProduct />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
