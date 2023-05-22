import { useDispatch } from "react-redux";
import { setAdd } from "../state/shoppingCart";

export default function CarritoCard({ product }) {
  const dispatch = useDispatch();

  const handlerAdd = (e) => {
    e.preventDefault();
    dispatch(setAdd(product.id));
  };

  /*   const handlerRemove = (e) => {
    e.preventDefault();
    dispatch(setRemove(product.id));
  }; */

  return (
    <div>
      <div>
        <img src={product.image[0].url} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        {/*     <button className="btn btn-danger" onClick={handlerRemove}>
          -
        </button> */}
        <span>1</span>
        <button className="btn btn-danger" onClick={handlerAdd}>
          +
        </button>
      </div>
      <button className="btn btn-info">Comprar</button>
    </div>
  );
}
