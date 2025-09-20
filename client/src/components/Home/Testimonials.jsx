import React, { useState } from "react";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import TestimonialCard from "../../utils/TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      role: "Customer",
      img: "/images/user1.png",
      rating: 5,
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Dianne Russell",
      role: "Customer",
      img: "/images/user2.png",
      rating: 5,
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Eleanor Pena",
      role: "Customer",
      img: "/images/user3.png",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Client Testimonials
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black cursor-pointer shadow hover:bg-gray-100"
            >
              <MdArrowBackIos className="text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white cursor-pointer shadow hover:bg-green-600"
            >
              <MdArrowForwardIos className="text-xl" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i === index ? "opacity-100" : "opacity-50 scale-95"
              }`}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
