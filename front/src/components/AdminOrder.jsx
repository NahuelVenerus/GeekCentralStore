import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import CardPedidos from "./CardPedidos";

const AdminOrder = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_ROUTE}/api/orders`)
      .then((res) => setPedidos(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log("pedidos", pedidos);
  return (
    <div className="admin">
      <div>
        {pedidos[0] ? (
          <>
            <h1>Pedidos</h1>
            {pedidos.map((pedido) => (
              <CardPedidos key={pedido.id} pedido={pedido} />
            ))}
          </>
        ) : (
          <h1>No se han realizado pedidos aún</h1>
        )}
      </div>
    </div>
  );
};

export default AdminOrder;
