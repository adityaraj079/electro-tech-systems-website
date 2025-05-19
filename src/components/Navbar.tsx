import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white sticky top-0 shadow-md z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Title */}
          <Link to="/" className="flex flex-col md:flex-row items-center gap-2">
          <img
            src="/logo.png"
            alt="Electrotech Logo"
            className="h-14 md:h-16 w-auto mb-2 md:mb-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-[#ed6c1d] font-serif font-extrabold text-lg md:text-xl tracking-wide">
              Electro-tech Systems
            </h1>
            <p className="text-[10px] md:text-xs text-[#ed6c1d] font-serif">
              Authorised Dealer & ISO Certified
            </p>
          </div>
        </Link>


          {/* Desktop Links */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-700 font-medium">
              <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
                <Link to="/products">Products</Link>
              </li>
              <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-[#ed6c1d] focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
            <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
              <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
            </li>
            <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
              <Link to="/products" onClick={toggleMenu}>Products</Link>
            </li>
            <li className="hover:text-[#ed6c1d] cursor-pointer transition-colors duration-200">
              <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;