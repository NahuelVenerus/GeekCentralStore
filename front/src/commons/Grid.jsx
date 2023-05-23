import Card from "./card/Card";
// import { fakeData } from "../utils/fakeData";
import { useSelector } from "react-redux";

// import { useLocation } from "react-router";

const Grid = () => {
  const products = useSelector((state) => state.productList);
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {products.length > 0 ? (
            <>
              {products.map((element) => (
                <Card key={element.id} {...element} />
              ))}
            </>
          ) : (
            <h1>Productos no encontrados</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default Grid;
