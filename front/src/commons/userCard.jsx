import axios from "axios";
import { BASE_ROUTE } from "../rutas";
import { useNavigate } from "react-router";
const UserCard = ({ user, setDeletedUser }) => {
  // const navigate = useNavigate();
  console.log("vengo de user card?>", user.is_admin);
  const handleDelete = () => {
    axios
      .delete(`${BASE_ROUTE}/api/admin/remove/${user.nickname}`)
      .then(() => {
        setDeletedUser(user.nickname);
        alert("el usuario a sido eliminado");
      })
      .catch((error) => console.log("LA CAGAASTE", error));
  };

  const handleMakeAdmin = () => {
    axios
      .put(`${BASE_ROUTE}/api/users/${user.nickname}`, {
        is_admin: true,
      })
      .then(() => alert("el usuario es ahora un admin"));
  };

  const handleMakeNormalUser = () => {
    axios
      .put(`${BASE_ROUTE}/api/users/${user.nickname}`, {
        is_admin: false,
      })
      .then(() => alert("el usuario ya no es admin"));
  };

  return (
    <div className="col d-flex justify-content-center mb-4">
      <div
        className="card pink-shadow mb-1 bg-white rounded"
        style={{ width: "20rem" }}
      >
        <div className="card-body">
          <h5 className="card-text">nickname : {user.nickname}</h5>
          <h5 className="card-text">email : {user.email}</h5>
          <button className="btn btn-info" onClick={handleDelete}>
            borrar cuenta
          </button>
          <button className="btn btn-info" onClick={handleMakeAdmin}>
            hacer admin
          </button>
          <button className="btn btn-info" onClick={handleMakeNormalUser}>
            hacer usuario normal
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
