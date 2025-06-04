import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 px-4 py-6 text-xs font-semibold tracking-wider uppercase">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Hamburger (Mobile) or Menu (Desktop) */}
        <div className="flex items-center gap-6">
          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden focus:outline-none"
          >
            <svg
              className="w-5 h-5"
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
            <Link to="/">Home</Link>
            <Link to="#">About us</Link>
            <Link to="#">Help center</Link>
            <Link to="#">Brands</Link>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="text-sm lg:text-base font-bold tracking-widest">
          <Link to="/">Autograph</Link>
        </div>

        {/* Right: Options (Desktop only) */}
        <div className="hidden lg:flex gap-6 items-center">
          <Link to="#">Search</Link>
          <Link to="/products">Shop</Link>
          <Link to="/login">Account</Link>
          <Link to="#">Wishlist</Link>
          <Link to="/cart">Bag</Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-2 space-y-2 px-1 text-[11px]">
          <div className="flex flex-col space-y-1 border-t border-gray-200 pt-3">
            <Link to="/">Home</Link>
            <Link to="#">Men</Link>
            <Link to="#">Women</Link>
            <Link to="#">Brands</Link>
          </div>
          <div className="flex flex-col space-y-1 border-t border-gray-200 pt-3">
            <Link to="#">Search</Link>
            <Link to="/products">Shop</Link>
            <Link to="/login">Account</Link>
            <Link to="#">Wishlist</Link>
            <Link to="/cart">Bag</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
