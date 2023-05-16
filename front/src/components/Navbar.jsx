import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";
import { setUser } from "../state/user";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/logout">
          <button>Logout</button>
        </Link>

        <Link to="/signup">
          <button>Signup</button>
        </Link>

        <Link to="/carrito">
          <button>Carrito</button>
        </Link>
      </div>
      <Buscador />
    </nav>
  );
}

export default Navbar;
