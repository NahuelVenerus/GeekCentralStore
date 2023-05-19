import { fakeData } from "../utils/fakeData";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const producto = fakeData[id - 1];

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ height: "200px" }}
            src={producto.imagen[0].url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <h3 className="card-text">${producto.precio}</h3>
            <p className="card-text">
              <small className="text-muted">{producto.valoracion}</small>
            </p>
            <button className="btn btn-info">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
