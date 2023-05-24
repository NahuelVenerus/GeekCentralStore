import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useSelector } from "react-redux";
import CartPedidos from "./CartPedidos";

const AdminOrder = () => {
  const admin = useSelector((state) => state.user);
  const [pedidos, setPedidos] = useState({});
  console.log(admin);
  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/orders`)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="admin">
      <div>
        {pedidos ? (
          <>
            {pedidos.map((pedido) => (
              <cartPedidos key={pedido.id} {...pedido} />
            ))}
          </>
        ) : (
          <h1>No hay pedidos pendientes</h1>
        )}
      </div>
    </div>
  );
};

export default AdminOrder;
