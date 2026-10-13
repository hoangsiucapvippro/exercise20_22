import React from "react";
import { useParams, Link } from "react-router-dom";
import { dishes } from "./data";

const DishDetail = () => {
  const { id } = useParams();

  const dish = dishes.find((item) => item.id === Number(id));

  if (!dish) {
    return (
      <div>
        <h2>Dish not found</h2>
        <Link to="/dishes">Back to Dishes</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{dish.name}</h1>

      <img src={`/${dish.image}`} alt={dish.name} width="250" />

      <p>ID: {dish.id}</p>
      <p>Category: {dish.category}</p>
      <p>Label: {dish.label || "None"}</p>
      <p>Price: ${dish.price}</p>
      <p>Featured: {dish.featured ? "Yes" : "No"}</p>
      <p>Description: {dish.description}</p>

      <Link to="/dishes">Back to Dishes</Link>
    </div>
  );
};

export default DishDetail;
