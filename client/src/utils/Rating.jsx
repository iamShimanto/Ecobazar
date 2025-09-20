import React from 'react'
import { FiStar } from 'react-icons/fi';

const Rating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = totalStars - fullStars - halfStars;
  return (
    <>
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FiStar key={`full_${i}`} className="w-4 h-4 fill-current" />
        ))}
        {[...Array(halfStars)].map((_, i) => (
          <FiStar key={`half_${i}`} className="w-4 h-4 fill-current" />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <FiStar key={`empty_${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </div>
    </>
  );
};

export default Rating