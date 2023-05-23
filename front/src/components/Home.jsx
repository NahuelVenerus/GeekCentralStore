import React from "react";
import Grid from "../commons/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h2>Home</h2>
      <div>
        {user.is_admin ? (
          <div>
            <Link to="/admin">
              <button>admin options</button>
            </Link>
          </div>
        ) : (
          <div>no soy admin</div>
        )}
      </div>

      <Grid />
    </div>
  );
}

export default Home;
