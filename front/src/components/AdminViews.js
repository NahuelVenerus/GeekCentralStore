import React from "react";
import { Link } from "react-router-dom";

const AdminViews = () => {
  return (
    <div className="admin">
      <Link to="/admin-products">
        <button>Productos</button>
      </Link>
      <Link to="/admin-order">
        <button>Pedidos</button>
      </Link>
      {/* <button>Categorias</button> */}
    </div>
  );
};

export default AdminViews;
