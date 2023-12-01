import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./compuden/regiter/register";
import Login from "./compuden/login/login";
import Home from "./compuden/home/home";
import Product from "./compuden/Product/Product";
import ProductDetall from "./compuden/ProductDetall/ProductDetall";
export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/products" element={<Product></Product>}>
        <Route
          path=":productID"
          element={<ProductDetall></ProductDetall>}
        ></Route>
      </Route>
    </Routes>
  );
}
