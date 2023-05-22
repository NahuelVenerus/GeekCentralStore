import Card from "./Card";
// import { fakeData } from "../utils/fakeData";
import { useSelector } from "react-redux";

// import { useLocation } from "react-router";

const Grid = () => {
  const products = useSelector((state) => state.shoppingCart);
  return (
    <div className="container text-center">
      <div className="row">
        {products.map((element) => (
          <Card key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
};
export default Grid;
