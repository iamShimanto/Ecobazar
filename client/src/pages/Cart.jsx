import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Breadcrumb from "../utils/BreadCrumb";
import { Link } from "react-router";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      img: "/images/insta1.png",
      price: 14.99,
      qty: 2,
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      img: "/images/insta2.png",
      price: 45.0,
      qty: 1,
    },
    {
      id: 3,
      name: "Fresh Sujapuri Mango",
      img: "/images/insta3.png",
      price: 9.0,
      qty: 3,
    },
  ]);

  const updateQty = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden container">
      <Breadcrumb />
      <h2 className="text-3xl font-semibold text-center mb-6">
        My Shopping Cart
      </h2>
      {/* Header (desktop only) */}
      <div className="hidden md:grid grid-cols-5 bg-gray-100 font-semibold p-4">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
        <div></div>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="grid md:grid-cols-5 items-center border-t p-4 gap-4"
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

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(item.id, item.qty - 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-3">{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, item.qty + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-green-600 font-semibold">
            ${(item.price * item.qty).toFixed(2)}
          </div>

          {/* Remove */}
          <div className="flex justify-end md:justify-start">
            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-500 hover:text-red-500 border rounded-full p-1 cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div className="border-t p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">
          Total: <span className="text-green-600">${subtotal.toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="mt-3 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
