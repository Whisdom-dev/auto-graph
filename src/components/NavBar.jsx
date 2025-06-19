import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAdmin } = useContext(AuthContext);
  const location = useLocation();

  const linkClass = (path) =>
    `hover:text-red-600 transition ${location.pathname === path ? "text-red-600" : "text-white"}`;

  return (
    <nav className="w-full bg-black border-b border-gray-300 px-4 py-6 text-xs font-semibold tracking-wider uppercase">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hamburger (Mobile) or Menu (Desktop) */}
        <div className="flex items-center gap-6">
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/about" className={linkClass("/about")}>About Us</Link>
            <Link to="/help-center" className={linkClass("/help-center")}>Help Center</Link>
            <Link to="#" className="text-white hover:text-red-600 transition">Brands</Link>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="text-sm lg:text-base font-bold tracking-widest text-white">
          <Link to="/">Autograph</Link>
        </div>

        {/* Right: Options (Desktop only) */}
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="#" className="text-white hover:text-red-600 transition">Search</Link>
          <Link to="/products" className={linkClass("/products")}>Shop</Link>
          <Link to="/account" className={linkClass("/account")}>Account</Link>
          <Link to="#" className="text-white hover:text-red-600 transition">Wishlist</Link>
          <Link to="/cart" className={linkClass("/cart")}>Bag</Link>
          {isAdmin && (
            <Link to="/admin" className={linkClass("/admin")}>Admin</Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-2 space-y-2 px-1 text-[11px] bg-black text-white">
          <div className="flex flex-col space-y-1 border-t border-gray-200 pt-3">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/about" className={linkClass("/about")}>About Us</Link>
            <Link to="/help-center" className={linkClass("/help-center")}>Help Center</Link>
            <Link to="#" className="hover:text-red-600 transition">Brands</Link>
            {isAdmin && (
              <Link to="/admin" className={linkClass("/admin")}>Admin</Link>
            )}
          </div>
          <div className="flex flex-col space-y-1 border-t border-gray-200 pt-3">
            <Link to="#" className="hover:text-red-600 transition">Search</Link>
            <Link to="/products" className={linkClass("/products")}>Shop</Link>
            <Link to="/account" className={linkClass("/account")}>Account</Link>
            <Link to="#" className="hover:text-red-600 transition">Wishlist</Link>
            <Link to="/cart" className={linkClass("/cart")}>Bag</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
