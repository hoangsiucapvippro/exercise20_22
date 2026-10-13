import React from "react";
import { Link } from "react-router-dom";
import { dishes } from "./data";

const Dishes = () => {
  return (
    <div>
      <h1>List of Dishes</h1>

      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Link to={`/dishes/${dish.id}`}>
              ID: {dish.id} - {dish.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;
