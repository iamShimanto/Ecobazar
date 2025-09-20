import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramSection = () => {
  const images = [
    "/images/insta1.png",
    "/images/insta2.png",
    "/images/insta3.png",
    "/images/insta4.png",
    "/images/insta5.png",
    "/images/insta6.png",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Follow us on Instagram
        </h2>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={src}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
