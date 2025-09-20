import React from 'react'
import { FaRegUser, FaRegComments } from "react-icons/fa";

const BlogCard = ({ img, day, month, category, author, comments, title }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        {/* Image */}
        <div className="relative">
          <img src={img} alt={title} className="w-full h-64 object-cover" />
          {/* Date Badge */}
          <div className="absolute bottom-3 left-3 bg-white px-3 py-2 rounded-md text-center shadow">
            <p className="text-lg font-bold">{day}</p>
            <span className="text-xs uppercase">{month}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
            <span className="flex items-center gap-1">🍽 {category}</span>
            <span className="flex items-center gap-1">
              <FaRegUser /> {author}
            </span>
            <span className="flex items-center gap-1">
              <FaRegComments /> {comments} Comments
            </span>
          </div>

          <h3 className="text-gray-800 font-semibold mb-3">{title}</h3>

          <a
            href="#"
            className="text-green-600 font-semibold flex items-center gap-1 hover:text-green-800"
          >
            Read More →
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCard