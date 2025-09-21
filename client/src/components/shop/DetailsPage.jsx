import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProductDescription from "./ProductDescription";
import RelatedProduct from "./RelatedProduct";

const DetailsPage = () => {
  const product = {
    id: 1,
    name: "Chinese Cabbage",
    price: 17.28,
    originalPrice: 48.0,
    inStock: true,
    rating: 3,
    reviews: 4,
    sku: "251594",
    brand: "Farmway",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum.",
    images: [
      "https://images.unsplash.com/photo-1758032553546-fd53c48a5e46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1757778281735-f26d15bff432?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1757877942839-e3ed20a6c8c4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    tags: ["Vegetables", "Healthy", "Chinese", "Cabbage", "Green Cabbage"],
  };

  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [qty, setQty] = useState(1);

  const handleQty = (type) => {
    if (type === "inc") setQty(qty + 1);
    if (type === "dec" && qty > 1) setQty(qty - 1);
  };
  return (
    <>
      <div className="my-10">
        <div className="container  grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mb-10">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  onClick={() => setSelectedImg(img)}
                  className={`w-20 h-20 object-cover border-2 rounded cursor-pointer ${
                    selectedImg === img ? "border-green-600" : "border-gray-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex-1">
              <img
                src={selectedImg}
                alt={product.name}
                className="w-full h-[400px] object-cover rounded-lg shadow"
              />
            </div>
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-gray-600">{product.reviews} Reviews</span>
              <span className="ml-4 text-sm text-gray-500">
                SKU: {product.sku}
              </span>
            </div>

            {/* Price */}
            <div className="mb-3 mt-7">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
            </div>

            <p className="text-gray-700 mb-4 max-w-150 mt-10">
              {product.description}
            </p>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-6 mt-10">
              <button
                onClick={() => handleQty("dec")}
                className="px-3 py-1 border rounded bg-soft-primary hover:bg-primary duration-150 cursor-pointer"
              >
                -
              </button>
              <span className="w-5 text-center font-bold">{qty}</span>
              <button
                onClick={() => handleQty("inc")}
                className="px-3 py-1 border rounded bg-soft-primary hover:bg-primary duration-150 cursor-pointer"
              >
                +
              </button>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition cursor-pointer">
                Add to Cart
              </button>
            </div>
            <div>
              <p className="text-black font-semibold">
                Category: <span className="font-normal">Vegetables</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container mb-10">
          <div className="flex justify-center mb-10 pb-7 border-b">
            <button className="p-4 text-primary font-semibold cursor-pointer">Descriptions</button>
            <button className="p-4 text-secondary font-semibold cursor-pointer">Additional Information</button>
          </div>
          <ProductDescription />
        </div>
        <div className="container">
            <RelatedProduct />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
