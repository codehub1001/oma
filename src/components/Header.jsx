import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi"; // added FiShoppingCart

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Gallery", to: "/gallery" },
  ];

  return (
    <header className="bg-black text-gold sticky top-0 z-50 shadow-md transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={() => setNavOpen(false)} className="flex items-center">
              <img
                src="/img/oglogo.png"
                alt="OMA Glamour Logo"
                className="w-10 h-auto sm:w-12"
              />
              <span className="text-xl sm:text-2xl font-bold font-serif tracking-wider ml-2">
                OMA GLAMOUR
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-medium items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setNavOpen(false)}
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Store button with icon */}
            <Link
              to="/store"
              onClick={() => setNavOpen(false)}
              className="inline-flex items-center bg-yellow-500 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
            >
              <FiShoppingCart className="mr-2" size={18} />
              Store
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-yellow-500 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 text-gray-300 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setNavOpen(false)}
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Store button */}
            <Link
              to="/store"
              onClick={() => setNavOpen(false)}
              className="inline-flex items-center justify-center bg-yellow-500 text-black py-2 rounded-full text-sm font-semibold mt-2 hover:bg-yellow-400 transition"
            >
              <FiShoppingCart className="mr-2" size={18} />
              Store
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
