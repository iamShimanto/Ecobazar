import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Breadcrumb from "../utils/BreadCrumb";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      img: "/images/insta1.png",
      price: 14.99,
      oldPrice: 20.99,
      inStock: true,
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      img: "/images/insta2.png",
      price: 45.0,
      inStock: true,
    },
    {
      id: 3,
      name: "Fresh Sujapuri Mango",
      img: "/images/insta3.png",
      price: 9.0,
      inStock: false,
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden container mb-10">
      <Breadcrumb />
      <h2 className="text-3xl font-semibold text-center mb-6">My Wishlist</h2>
      {/* Header (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-4 bg-gray-100 font-semibold p-4">
        <div>Product</div>
        <div>Price</div>
        <div>Stock Status</div>
        <div></div>
      </div>

      {/* Items */}
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-4 items-center border-t p-4 gap-4"
        >
          {/* Product */}
          <div className="flex items-center gap-3">
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 object-contain rounded"
            />
            <span className="font-medium">{item.name}</span>
          </div>

          {/* Price */}
          <div className="text-gray-800 font-semibold">
            ${item.price.toFixed(2)}
          </div>

          {/* Stock Status */}
          <div>
            {item.inStock ? (
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">
                In Stock
              </span>
            ) : (
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">
                Out of Stock
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 justify-end md:justify-start">
            <button
              disabled={!item.inStock}
              className={`px-4 py-2 rounded-full text-white font-medium transition cursor-pointer ${
                item.inStock
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-500 hover:text-red-500 border rounded-full p-1 cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
