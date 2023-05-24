import { useSelector } from "react-redux";
import UserCard from "../commons/userCard";
import { useState } from "react";
import { useEffect } from "react";

const ManageUsers = () => {
  const [deletedUser, setDeletedUser] = useState({});
  const userList = useSelector((state) => state.userList);

  useEffect(() => {}, [deletedUser]);

  console.log("soy User List", userList);
  return (
    <>
      {userList[0] ? (
        <div>
          {userList.map((data) => (
            <UserCard
              key={data.id}
              user={data}
              setDeletedUser={setDeletedUser}
            />
          ))}
        </div>
      ) : (
        <h1>No hay usuarios creados</h1>
      )}
    </>
  );
};

export default ManageUsers;
