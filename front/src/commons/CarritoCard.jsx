import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

export default function CarritoCard({
  cartProduct,
  setDeletedProduct,
  total,
  setTotal,
  editado,
  setEditado,
}) {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const setCartProductQuantity = () => {
    axios
      .put(`${BASE_ROUTE}/api/cart-products/edit`, {
        id: cartProduct.id,
        quantity: quantity,
      })
      .then((editedProduct) => {
        setEditado(!editado);
      })
      .catch((err) => console.log(err));
  };

  const handlerAdd = () => {
    setQuantity(quantity + 1);
  };

  const handlerRemove = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      setCartProductQuantity();
    } else setIsEditing(true);
    console.log("quantity", quantity);
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_ROUTE}/api/cart-products/remove`, {
        data: {
          id: cartProduct.product.id,
        },
      })
      .then(() => {
        Swal.fire({
          text: "Producto eliminado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        setDeletedProduct(cartProduct.product.id);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, [total]);

  return (
    <div>
      <div>
        <Card>
          <Card.Img src={cartProduct.product?.image} />
          <Card.Body>
            <Button onClick={handleDelete}>Delete</Button>
            <Card.Title>{cartProduct.product?.name}</Card.Title>
            <Card.Text>Valor: ${cartProduct.product?.price}</Card.Text>
            <Card.Text>
              Total: ${cartProduct.product?.price * quantity}
            </Card.Text>
            {isEditing ? (
              <div>
                <Card.Text>
                  <Button onClick={handlerRemove}>-</Button> {quantity}
                  <Button onClick={handlerAdd}>+</Button>
                </Card.Text>
                <Button onClick={handleEdit}>Guardar</Button>
              </div>
            ) : (
              <div>
                <Button onClick={handleEdit}>Edit</Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
