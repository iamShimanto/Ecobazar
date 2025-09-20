import React, { useState } from "react";
import { FaRegHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { IoBagOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      {/* Top section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        <Link to="/">
          <img src="/images/Logo.png" alt="logo" className="h-10" />
        </Link>

        {/* Search - hidden on mobile */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center border border-black/25 py-2 px-3 rounded-l-lg">
            <FaSearch className="text-[#1A1A1A]" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none pl-2"
            />
          </div>
          <button className="text-white text-sm font-semibold py-2 px-4 bg-primary rounded-r-lg hover:bg-hard-primary duration-200 cursor-pointer">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            to="/wishlist"
            className="text-2xl md:text-3xl hover:text-primary duration-200"
          >
            <FaRegHeart />
          </Link>
          <Link to="/cart" className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <IoBagOutline className="text-2xl md:text-3xl hover:text-primary duration-200" />
              <p className="text-xs md:text-sm size-6 rounded-full flex items-center justify-center text-white bg-hard-primary absolute -top-2 left-3">
                3
              </p>
            </div>
            <div className="hidden md:block">
              <p className="font-medium">Shopping cart:</p>
              <p className="font-medium">$57.00</p>
            </div>
          </Link>

          {/* Hamburger - only mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-[#333333] text-white">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-0">
          {/* Menu - mobile */}
          <ul
            className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-8 absolute md:static pl-5 bg-[#333333] w-full left-0 md:w-auto transition-all duration-300 ${
              menuOpen ? "top-[64px] py-4" : "top-[-500px]"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-secondary"
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-2">
            <p className="text-3xl">
              <BiSolidPhoneCall />
            </p>
            <p className="text-lg">
              <a href="tel:+8801750658101">+880 1750-658101</a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
