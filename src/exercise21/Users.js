import React from "react";
import { Link } from "react-router-dom";
import { users } from "./data";

const Users = () => {
  return (
    <div>
      <h1>List of Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              ID: {user.id} - {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
