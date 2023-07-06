import React from "react";
import { Link } from "react-router-dom";
import { setUser } from "../state/user";
import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

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
    navigate("/");
  };

  return (
    <nav className={"navbar navbar-expand-md navbar-dark fixed-top bg-black"}>
      <div className={"container-fluid"}>
        <a class="navbar-brand">
          <Link to="/">
            <img
              src="geekLogo.png"
              alt="Geek Central Logo"
              width="300px"
              height="74.05px"
              onClick={handleHome}
            />
          </Link>
        </a>
        <Searcher />
        {user.nickname ? (
          <div className={"d-flex justify-content-end"}>
            <Link to={`/shopping-cart/${user.nickname}`}>
              <Button
                style={{ backgroundColor: "#EF233C", borderColor: "#EF233C" }}
              >
                <img src="cart.png" alt="cart" width="30px" height="30px" />
              </Button>
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
              <button type="button" className={"btn btn-outline-danger"}>
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className={"btn btn-outline-danger"}>
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
