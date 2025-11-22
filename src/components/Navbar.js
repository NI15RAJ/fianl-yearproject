import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import { useAuth } from "../AuthContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, profile, logout } = useAuth();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <motion.nav
      className="w-full bg-white dark:bg-slate-900 dark:border-slate-800 border-b border-slate-200 px-4 py-3 sticky top-0 z-50 shadow-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link to="/home" className="text-2xl font-bold text-green-600 dark:text-green-400">
          KrishiKart
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 text-slate-700 dark:text-slate-200">
          <NavLink to="/home" className={({isActive}) => isActive ? "text-green-600 font-semibold" : ""}>
            Home
          </NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "text-green-600 font-semibold" : ""}>
            Products
          </NavLink>
          <NavLink to="/market-prices" className={({isActive}) => isActive ? "text-green-600 font-semibold" : ""}>
            Market Prices
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-green-600 font-semibold" : ""}>
            About
          </NavLink>
          {profile?.role === "farmer" && (
            <NavLink to="/inventory" className={({isActive}) => isActive ? "text-green-600 font-semibold" : ""}>
              Inventory
            </NavLink>
          )}
        </div>

        {/* USER AREA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {!user ? (
            <>
              <Link to="/login" className="text-slate-700 dark:text-slate-200">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 text-white rounded-lg px-3 py-1.5"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative">
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer"
              >
                {profile?.name ? profile.name[0].toUpperCase() : "U"}
              </div>

              {/* Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-2 border border-slate-200 dark:border-slate-700">
                  <p className="px-2 text-sm text-slate-600 dark:text-slate-300">
                    {profile?.name}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-slate-700 rounded-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-green-600 dark:text-green-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-3 text-slate-700 dark:text-slate-200 pb-3 border-t pt-3 dark:border-slate-700">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          {profile?.role === "farmer" && <NavLink to="/inventory">Inventory</NavLink>}
          <NavLink to="/market-prices">Market Prices</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
