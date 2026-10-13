import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationMenu from "./exercise20/NavigationMenu";
import { renderRoutes } from "./exercise20/routes";
import Users from "./exercise21/Users";
import UserDetail from "./exercise21/UserDetail";
import Dishes from "./exercise21/Dishes";
import DishDetail from "./exercise21/DishDetail";
import Exercise22 from "./exercise22/Exercise22";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationMenu />

        <Routes>
          {renderRoutes()}

          <Route path="/users-list" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />

          <Route path="/dishes" element={<Dishes />} />
          <Route path="/dishes/:id" element={<DishDetail />} />
        </Routes>

        <Exercise22 />
      </div>
    </Router>
  );
};

export default App;
