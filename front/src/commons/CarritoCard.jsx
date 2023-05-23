import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useEffect, useState } from "react";

export default function CarritoCard({ cartProduct, setDeletedProduct }) {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(cartProduct.quantity);
  const [isEditing, setIsEditing] = useState(false);

  const fetchProducts = () => {
    axios
      .get(`${BASE_ROUTE}/api/products/${cartProduct.id}`)
      .then((productData) => {
        console.log("productData", productData);
        setProduct(productData.data);
      });
  };
  const setCartProductQuantity = () => {
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
          id: cartProduct.id,
        },
      })
      .then((prod) => {
        console.log("product ", prod);
        setDeletedProduct(cartProduct.id);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <Card>
          <Card.Img src={product.image} />
          <Card.Body>
            <Button onClick={handleDelete}>Delete</Button>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Valor: ${product.price}</Card.Text>
            <Card.Text>Total: ${product.price * quantity}</Card.Text>
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
