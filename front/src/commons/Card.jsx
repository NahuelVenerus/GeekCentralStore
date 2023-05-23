import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../state/productList";

const Card = ({ name, price, image, id }) => {
  const { nickname, is_admin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handlerAdd = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/cart-products/add`, {
        id: id,
        nickname: nickname,
      })
      .then((cartProduct) => console.log("Me TRAE PRODUCTOS", cartProduct.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_ROUTE}/api/admin/delete-product`, {
        data: {
          id: id,
        },
      })
      .then((prod) => dispatch(setProductList(prod)))
      .catch((Error) => console.log(Error));
  };

  const handleEdit = () => {
    axios.update(`${BASE_ROUTE}/api/admin/edit-product`);
  };

  return (
    <div className="col d-flex justify-content-center mb-4">
      <div
        className="card shadow mb-1 bg-white rounded"
        style={{ width: "20rem" }}
      >
        <Link style={{ textDecoration: "none" }} to={`/product-detail/${id}`}>
          <img
            style={{ height: "300px" }}
            src={image}
            className="card-img-top"
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h5 className="card-text">${price}</h5>
          <h5 className="card-text">{name}</h5>

          {is_admin ? (
            <>
              <button className="btn btn-info" onClick={handleDelete}>
                Eliminar
              </button>

              <button className="btn btn-info" onClick={handleEdit}>
                Editar
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-info" onClick={handlerAdd}>
                Agregar al Carrito
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
