import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-800 mt-16 py-6">
      {/* Horizontal Line */}
      <hr className="border-t-4 border-[#ed6c1d] mb-6" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Company Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Electro-tech Systems</h2>
          <p className="text-sm mt-1 opacity-70">Empowering trusted electrical solutions since 1985.</p>
        </div>

        {/* Navigation + LinkedIn */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <nav className="flex gap-4 text-sm">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-orange-600 transition-colors">Products</Link>
            <Link to="/about-us" className="hover:text-orange-600 transition-colors">About</Link>
            <Link to="/contact-us" className="hover:text-orange-600 transition-colors">Contact</Link>
          </nav>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/sales-electro-tech-systems/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-orange-600 transition-transform transform hover:scale-110"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs opacity-60 mt-4">
        &copy; {new Date().getFullYear()} Electro-tech Systems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
