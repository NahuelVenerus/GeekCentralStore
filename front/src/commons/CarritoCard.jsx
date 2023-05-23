import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useState } from "react";

export default function CarritoCard({ cartProduct, setDeletedProduct }) {
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [isEditing, setIsEditing] = useState(false);
  console.log("cart product", cartProduct);

  const setCartProductQuantity = () => {
    console.log("quantity", quantity);
    axios
      .put(`${BASE_ROUTE}/api/cart-products/edit`, {
        id: cartProduct.id,
        quantity: quantity,
      })
      .catch((err) => console.log(err));
  };

  const handlerAdd = () => {
    setQuantity(quantity + 1);
  };

  const handlerRemove = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
      setCartProductQuantity();
    } else setIsEditing(true);
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_ROUTE}/api/cart-products/remove`, {
        data: {
          id: cartProduct.product.id,
        },
      })
      .then((prod) => {
        console.log("product ", prod);
        setDeletedProduct(cartProduct.product.id);
      })
      .catch((err) => console.log(err));
  };

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
                <Button>Comprar</Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
