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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="input"
          placeholder="Buscar"
          {...searchInput}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Searcher;
