import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import React from "react";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";

function App() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div
      className={`w-full min-h-screen  ${
        dark ? "bg-[#1e1e1e] text-white" : "bg-[#e1e1e1] text-black"
      }`}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
