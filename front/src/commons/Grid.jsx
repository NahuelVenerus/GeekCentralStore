import Card from "./Card";
import { fakeData } from "../utils/fakeData";
const Grid = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          {fakeData.map((element) => (
            <div>
              <Card key={element.id} {...element} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Grid;
