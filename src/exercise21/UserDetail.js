import React from "react";
import { useParams, Link } from "react-router-dom";
import { users } from "./data";

const UserDetail = () => {
  const { id } = useParams();

  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <div>
        <h2>User not found</h2>
        <Link to="/users">Back to Users</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Age: {user.age}</p>

      <Link to="/users">Back to Users</Link>
    </div>
  );
};

export default UserDetail;
