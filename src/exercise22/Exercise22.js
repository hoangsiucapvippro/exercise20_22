import React from "react";
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./CustomNavbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";

const Exercise22 = () => {
  return (
    <>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Exercise22;
