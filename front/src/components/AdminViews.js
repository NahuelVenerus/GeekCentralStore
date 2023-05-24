import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BASE_ROUTE } from "../rutas";
import { setUserList } from "../state/usersList";

const AdminViews = () => {
  const dispatch = useDispatch();
  const handleShowUsers = () => {
    axios
      .get(`${BASE_ROUTE}/api/admin/get-users`)
      .then((res) => dispatch(setUserList(res.data)));
  };

  return (
    <div>
      <Link to="/admin-products">
        <button>Productos</button>
      </Link>
      <Link to="/admin-order">
        <button>Pedidos</button>
      </Link>
      <Link to="/admin/manage-users">
        <button onClick={handleShowUsers}>Administrar Usuarios</button>
      </Link>
      {/* <button>Categorias</button> */}
    </div>
  );
};

export default AdminViews;
