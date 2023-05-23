import React from "react";
import { Link } from "react-router-dom";
import { setUser } from "../state/user";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInitialState } from "../state/productList";

import Searcher from "./Searcher";

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
    <div className={"container"}>
      <nav className={"navbar navbar-expand-md navbar-dark fixed-top bg-black"}>
        <div className={"container-fluid"}>
          <a class="navbar-brand" href="#">
            <Link to="/">
              <img
                src="geekLogo.png"
                alt=""
                width="300px"
                height="74.05px"
                onClick={handleHome}
              />
            </Link>
          </a>
          <Searcher />
          {user.nickname ? (
            <div>
              <Link to="/shopping-cart">
                <button>Carrito</button>
              </Link>
              <Link to="/logout">
                <button
                  type="button"
                  className={"btn btn-outline-danger"}
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button type="button" className={"btn btn-outline-primary"}>
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className={"btn btn-outline-primary"}>
                  Signup
                </button>
              </Link>
            </div>
          )}
          {/* <Searcher /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
