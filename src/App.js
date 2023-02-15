import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListProduct from "./pages/ListProduct";
import Review from "./pages/Review";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ListProduct />} path="/list-product" />
      <Route element={<Review />} path="/reviews" />
    </Routes>
  );
}

export default App;
