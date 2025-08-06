import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import ProtectedPath from "../ProtectedPath/ProtectedPath";
import Home from "../../Pages/Home/Home";
import Product from "../../Pages/Product/Product";
import Aboutus from "../../Pages/Aboutus/Aboutus";
import Cart from "../cart/Cart";

function RouterPath() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route
            path="/"
            element={
              // <ProtectedPath>
              <Home />
              // </ProtectedPath>
            }
          />
          <Route
            path="/products"
            element={
              // <ProtectedPath>
              <Product />
              // </ProtectedPath>
            }
          />
          <Route
            path="/aboutus"
            element={
              // <ProtectedPath>
              <Aboutus />
              // </ProtectedPath>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RouterPath;
