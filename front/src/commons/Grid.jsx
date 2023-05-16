import Card from "./Card";
import { fakeData } from "../utils/fakeData";
// import { useLocation } from "react-router";

const Grid = () => {
  return (
    <div className="container text-center">
      <div className="row">
        {fakeData.map((element) => (
          <Card key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
};
export default Grid;
