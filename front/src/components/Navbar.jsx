import React from "react";
import { Link } from "react-router-dom";
import { setUser } from "../state/user";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInitialState } from "../state/productList";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogOut = (e) => {
    e.preventDefault();
    axios
      .get(`${BASE_ROUTE}/api/users/logout`, { withCredentials: true })
      .then((resp) => {
        dispatch(setUser(resp.data));
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleHome = () => {
    dispatch(setInitialState());
  };

  return (
    <nav>
      <Link to="/">
        <button onClick={handleHome}>Home</button>
      </Link>
      {user.nickname ? (
        <div>
          <Link to={`/shopping-cart/${user.nickname}`}>
            <button>Carrito</button>
          </Link>
          <Link to="/logout">
            <button onClick={handleLogOut}>Logout</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      )}
      {/* <Searcher /> */}
    </nav>
  );
}

export default Navbar;
