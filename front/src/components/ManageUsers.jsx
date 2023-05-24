import axios from "axios";
import { BASE_ROUTE } from "../rutas";
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
      {userList.map((data) => (
        <UserCard key={data.id} user={data} setDeletedUser={setDeletedUser} />
      ))}
    </>
  );
};

export default ManageUsers;
