import axios from "axios";
import { BASE_ROUTE } from "../rutas";

import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { setProductList } from "../state/productList";

const Searcher = () => {
  const searchInput = useInput();
  const dispatch = useDispatch();

  const fetchProducts = async (search) => {
    try {
      const searchResults = await axios.get(
        `${BASE_ROUTE}/api/search/${search}`
      );
      dispatch(setProductList(searchResults.data));
      searchInput.setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      if (searchInput.value === "") {
      } else {
        await fetchProducts(searchInput.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={"d-flex "} onSubmit={handleSearch}>
        <input
          type="search"
          className="form-control me-2"
          placeholder="Buscar"
          {...searchInput}
        />
        <button class="btn btn-danger" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default Searcher;
