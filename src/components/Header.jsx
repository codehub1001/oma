import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-black text-gold sticky top-0 z-50 shadow-md transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/img/oglogo.png"
              alt="OMA Glamour Logo"
              className="w-10 h-auto sm:w-12"
            />
            <span className="text-xl sm:text-2xl font-bold font-serif tracking-wider">
              OMA GLAMOUR
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12 text-sm font-medium items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="bg-gold text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-white">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gold focus:outline-none"
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
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="bg-gold text-white text-center py-2 rounded-full text-sm mt-2 hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
