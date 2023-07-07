import React from "react";
import Grid from "../commons/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminViews from "./AdminViews";

function Home() {
  const user = useSelector((state) => state.user);

  return (
    <>
      {user.is_admin ? (
        <Link to="/admin">
          <AdminViews />
        </Link>
      ) : (
        <Grid />
      )}
    </>
  );
}

export default Home;
