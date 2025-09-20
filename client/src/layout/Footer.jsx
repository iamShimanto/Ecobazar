import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Subscribe our Newsletter
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full md:w-80 rounded-l-full border border-gray-300 focus:outline-none text-black"
              />
              <button className="bg-green-500 text-white px-6 py-3 rounded-r-full hover:bg-green-600 cursor-pointer duration-200">
                Subscribe
              </button>
            </div>

            <div className="flex gap-4 text-white">
              <Link to="/" className="bg-green-500 p-2 rounded-full hover:bg-primary duration-200">
                <FaFacebookF />
              </Link>
              <Link to="/" className="bg-green-500 p-2 rounded-full hover:bg-primary duration-200">
                <FaTwitter />
              </Link>
              <Link to="/" className="bg-green-500 p-2 rounded-full hover:bg-primary duration-200">
                <FaPinterestP />
              </Link>
              <Link to="/" className="bg-green-500 p-2 rounded-full hover:bg-primary duration-200">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="container px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Info */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">🌱 Ecobazar</h3>
          <p className="text-gray-400 mb-4 max-w-100">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <p className="text-white font-medium">
            (+880) 1750-658101 <span className="text-gray-400"> or </span>{" "}
            <span className="underline">shimanto.dev.bd@gmail.com</span>
          </p>
        </div>

        {/* My Account */}
        <div>
          <h4 className="text-white font-semibold mb-4">My Account</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/">My Account</Link>
            </li>
            <li>
              <Link to="/">Order History</Link>
            </li>
            <li>
              <Link to="/">Shoping Cart</Link>
            </li>
            <li>
              <Link to="/">Wishlist</Link>
            </li>
          </ul>
        </div>

        {/* Helps */}
        <div>
          <h4 className="text-white font-semibold mb-4">Helps</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Faqs</Link>
            </li>
            <li>
              <Link to="/">Terms & Condition</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/">Fruit & Vegetables</Link>
            </li>
            <li>
              <Link to="/">Meat & Fish</Link>
            </li>
            <li>
              <Link to="/">Bread & Bakery</Link>
            </li>
            <li>
              <Link to="/">Beauty & Health</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>Ecobazar eCommerce © 2025. All Rights Reserved</p>
          <div className="flex gap-3">
            <img src="/images/applepay.png" alt="Apple Pay" className="h-8" />
            <img src="/images/visa.png" alt="Visa" className="h-8" />
            <img
              src="/images/mastercard.png"
              alt="Mastercard"
              className="h-8"
            />
            <img
              src="/images/secure.png"
              alt="Secure Payment"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
