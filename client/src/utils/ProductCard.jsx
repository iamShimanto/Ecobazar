import React from "react";
import Rating from "./Rating";
import { FiEye, FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  //   const [isHovered, setIsHovered] = useState(false);
  const cardClasses = product.isHighlighted
    ? "border-2 border-green-500 shadow-lg"
    : "border border-gray-200";
  return (
    <>
      <div
        className={`bg-white rounded-lg p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${cardClasses}`}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          {/* {product.isSale && (
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md z-10">
              Sale {product.salePercentage}%
            </div>
          )} */}
          {/* <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <FiHeart className="text-gray-600" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
              <FiEye className="text-gray-600" />
            </button>
          </div> */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="mt-4 flex-grow">
          <h3 className="text-base text-primary font-medium">{product.name}</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-lg font-semibold text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            {/* {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )} */}
          </div>
          <div className="mt-2">
            <Rating rating={product.rating} />
          </div>
        </div>

        <div className="mt-4">
          <button
            className={`w-full flex items-center justify-center p-2 rounded-md transition-colors duration-300 bg-green-500 text-white hover:bg-green-600 cursor-pointer`}
          >
            <FiShoppingCart className="mr-2" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
