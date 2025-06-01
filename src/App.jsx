import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import React from "react";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";

function App() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div
      className={`top-0 left-0 w-full h-full ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
