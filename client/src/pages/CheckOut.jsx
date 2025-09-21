import React, { useState } from "react";

const Checkout = () => {
  const [payment, setPayment] = useState("cod");

  // Example cart data
  const [cart] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.0,
      qty: 5,
      img: "/images/insta1.png",
    },
    {
      id: 2,
      name: "Red Capsicum",
      price: 14.0,
      qty: 1,
      img: "/images/insta2.png",
    },
  ]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md container">
      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE - Billing Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border p-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (optional)"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border p-2 rounded"
            />

            <div className="grid grid-cols-2 gap-4">
              <select className="w-full border p-2 rounded">
                <option>Country / Region</option>
                <option>Bangladesh</option>
                <option>India</option>
                <option>USA</option>
              </select>
              <select className="w-full border p-2 rounded">
                <option>State</option>
                <option>Dhaka</option>
                <option>Delhi</option>
                <option>California</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="ship" className="w-4 h-4" />
              <label htmlFor="ship" className="text-gray-600">
                Ship to a different address
              </label>
            </div>

            <textarea
              placeholder="Order Notes (Optional)"
              className="w-full border p-2 rounded h-24"
            />
          </form>
        </div>

        {/* RIGHT SIDE - Dynamic Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="border rounded p-4 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                {/* Product image + name */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 object-contain rounded"
                  />
                  <span>
                    {item.name} x{item.qty}
                  </span>
                </div>
                {/* Price */}
                <span className="font-medium">
                  ${(item.price * item.qty).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-600">
                {shipping === 0 ? "Free" : `$${shipping}`}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <h3 className="text-lg font-semibold mt-6 mb-3">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={payment === "cod"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Cash on Delivery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={payment === "paypal"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Paypal
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="amazon"
                checked={payment === "amazon"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Amazon Pay
            </label>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
