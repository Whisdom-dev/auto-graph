// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div>
          <h1 className="text-2xl font-bold tracking-widest mb-6">AUTO-G</h1>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="mt-10 text-xs text-gray-400 flex items-center space-x-2">
            <img
              src="https://flagcdn.com/w40/ng.png"
              alt="Nigeria Flag"
              className="w-5 h-3"
            />
            <span>NIGERIA (EUR €)</span>
            <i className="fas fa-chevron-down text-xs ml-1"></i>
          </div>
        </div>

        {/* About Our Store */}
        <div>
          <h3 className="uppercase text-gray-300 mb-4">About Our Store</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Migdal 2, Tel Aviv</li>
            <li>Rothchild 1, Tel Aviv</li>
            <li>Shabazi 40, Tel Aviv</li>
            <li>Dizengoff 220, Tel Aviv (OUTLET)</li>
            <li>Mark. Mpotsari 12, Glyfada, Greece</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="uppercase text-gray-300 mb-4">Customer Service</h3>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/search" className="hover:text-white">Search</Link></li>
            <li><Link to="/about" className="hover:text-white">About us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/returns" className="hover:text-white">Exchange & Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/shipping" className="hover:text-white">Shipment & Delivery</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="uppercase text-gray-300 mb-4">Account</h3>
          <ul className="space-y-1 text-gray-400">
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/signup" className="hover:text-white">Register</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="uppercase text-gray-300 mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Unlock Exclusive Offers: Join the Inner Circle and Enjoy 10% Off your first order!
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">Email</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 mb-3 bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 w-full uppercase text-sm font-medium hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 - AUTOGRAPH POWERED BY SHOPIFY
      </div>
    </footer>
  );
};

export default Footer;
