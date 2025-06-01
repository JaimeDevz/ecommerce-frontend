import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/solstice-brews-high-resolution-logo-transparent.png";
import { useDispatch } from "react-redux";
import { toggleDark } from "../features/themeSlice";

const NavBar = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const DarkMode = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={`p-4 border-b-1 ${
          DarkMode ? " border-[#d2b48c]" : "border-black"
        }`}
      >
        <div className=" max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 w-full mr-2" />
          </Link>

          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch(toggleDark())}
              className="bg-gray-700 dark:bg-gray-600 rounded-full w-10 h-6 flex items-center px-1 transition"
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-block w-4 h-4 rounded-full bg-white transform transition ${
                  DarkMode ? "translate-x-4" : ""
                }`}
              />
            </button>
            <Link
              to="/cart"
              className="relative flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
            >
              <span role="img" aria-label="cart" className="mr-1">
                🛒
              </span>
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-red-500 text-xs rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
