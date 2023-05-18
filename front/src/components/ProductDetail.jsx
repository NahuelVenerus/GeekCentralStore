import { fakeData } from "../utils/fakeData";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const product = fakeData[id - 1];

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            style={{ height: "300px" }}
            src={product.image[0].url}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h3 className="card-text">${product.price}</h3>
            <p className="card-text">
              <small className="text-muted">{product.value}</small>
            </p>
            <button className="btn btn-info">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
