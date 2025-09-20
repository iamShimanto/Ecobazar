import React from 'react'
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ text, name, role, img, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-green-400 text-3xl mb-4" />

      {/* Review Text */}
      <p className="text-gray-600 mb-6">{text}</p>

      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
        {/* Rating */}
        <div className="flex text-orange-400">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard