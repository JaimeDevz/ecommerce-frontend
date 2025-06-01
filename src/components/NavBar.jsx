import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/solstice-brews-high-resolution-logo-transparent.png";
import { toggleDark } from "../features/themeSlice";

const NavBar = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const DarkMode = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`p-4 border-b-2 rounded-2xl ${
        DarkMode ? "border-[#6f4e37]" : "border-black"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-xl"
        >
          {menuOpen ? "X" : "Menu"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400">
              Products
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

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
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

          {/* Cart */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col mt-4 space-y-2 md:hidden">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 block"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400 block"
            >
              Contact
            </Link>
          </li>
          <div className="flex items-center space-x-4 pt-2">
            <button
              onClick={() => {
                dispatch(toggleDark());
                setMenuOpen(false);
              }}
              className="bg-gray-700 dark:bg-gray-600 rounded-full w-10 h-6 flex items-center px-1 transition"
            >
              <span
                className={`inline-block w-4 h-4 rounded-full bg-white transform transition ${
                  DarkMode ? "translate-x-4" : ""
                }`}
              />
            </button>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
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
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
