import React from "react";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const Products = () => <h1>Products Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const UserProfile = () => {
  const { userId } = useParams();

  return <h1>User Profile: {userId || "No user ID"}</h1>;
};

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/users/:userId?",
    component: UserProfile,
  },
];

export const renderRoutes = () => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ));
};
