import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_ROUTE } from "../../rutas";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../state/productList";
import Swal from "sweetalert2";

const Card = ({ name, price, image, id }) => {
  const { nickname, is_admin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_ROUTE}/api/cart-products/add`, {
        id: id,
        nickname: nickname,
      })
      .then(() => {
        Swal.fire({
          text: "Producto agregado al carrito con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: "El producto no se pudo agregar al carrito",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        navigate("/");
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`${BASE_ROUTE}/api/admin/delete-product`, {
        data: {
          id: id,
        },
      })
      .then((prod) => {
        Swal.fire({
          text: "Producto eliminado con éxito",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
        dispatch(setProductList(prod));
        navigate("/admin-products");
      });
  };

  return (
    <div className="col d-flex justify-content-center mb-4">
      <div
        className="card pink-shadow mb-1 bg-white rounded"
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
              <button onClick={handleDelete} className="btn btn-danger">
                delete
              </button>
              <Link to={`/EditProduct/${id}`}>
                <button className="btn btn-info">edit</button>
              </Link>
            </>
          ) : (
            <>
              <button className="btn btn-info" onClick={handleAdd}>
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
