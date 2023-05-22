import axios from "axios";
import { useState } from "react";
import { BASE_ROUTE } from "../rutas";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../commons/Grid";
import { setSearch } from "../state/searchProduct";
import Card from "../commons/Card";
import useInput from "../hooks/useInput";

function Searcher() {
  const [products, setProducts] = useState([]);
  const searchInput = useInput();
  const dispatch = useDispatch();
  const searcher = useSelector((state) => state.search);

  const fetchProducts = (search) => {
    axios
      .get(`${BASE_ROUTE}/api/search/${search}`)
      .then((results) => {
        console.log("results", results.data);
        setProducts(results.data);
        dispatch(setSearch(search));
        console.log("searcher", search);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(searchInput.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="input"
          placeholder="Buscar"
          {...searchInput}
        />
        <input type="submit" />
      </form>

      {searcher.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              {products.map((p) => (
                <Card key={p.id} {...p} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Grid />
      )}
    </div>
  );
}

export default Searcher;
