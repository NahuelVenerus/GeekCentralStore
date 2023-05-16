import Card from "./Card";
import { fakeData } from "../utils/fakeData";
// import { useLocation } from "react-router";

const Grid = () => {
  return (
    <div class="container text-center">
      <div class="row">
        {fakeData.map((element) => (
          <Card key={element.id} {...element} />
        ))}
      </div>
    </div>
  );
};
export default Grid;
