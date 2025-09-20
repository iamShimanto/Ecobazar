// src/components/Features.jsx
import { FaShippingFast, FaHeadset, FaLock, FaBoxOpen } from "react-icons/fa";

const Features = () => {
  const items = [
    {
      icon: <FaShippingFast className="text-green-600 text-3xl" />,
      title: "Free Shipping",
      desc: "Free shipping on all your order",
    },
    {
      icon: <FaHeadset className="text-green-600 text-3xl" />,
      title: "Customer Support 24/7",
      desc: "Instant access to Support",
    },
    {
      icon: <FaLock className="text-green-600 text-3xl" />,
      title: "100% Secure Payment",
      desc: "We ensure your money is save",
    },
    {
      icon: <FaBoxOpen className="text-green-600 text-3xl" />,
      title: "Money-Back Guarantee",
      desc: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 md:p-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 container">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 text-gray-700 hover:scale-105 transition-transform"
        >
          <div>{item.icon}</div>
          <div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
