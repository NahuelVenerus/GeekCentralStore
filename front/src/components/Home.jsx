import React from "react";
import Grid from "../commons/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminViews from "./AdminViews";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div>
        {user.is_admin ? (
          <div>
            <Link to="/admin">
              <AdminViews />
            </Link>
          </div>
        ) : (
          <Grid />
        )}
      </div>
    </div>
  );
}

export default Home;
