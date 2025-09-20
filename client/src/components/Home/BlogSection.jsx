import React from "react";
import BlogCard from "../../utils/BlogCard";

const BlogSection = () => {
  const blogs = [
    {
      img: "/images/blog1.png",
      day: "18",
      month: "NOV",
      category: "Food",
      author: "Admin",
      comments: 65,
      title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      img: "/images/blog2.png",
      day: "23",
      month: "JAN",
      category: "Food",
      author: "Admin",
      comments: 65,
      title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
    {
      img: "/images/blog3.png",
      day: "18",
      month: "NOV",
      category: "Food",
      author: "Admin",
      comments: 65,
      title:
        "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-green-600 font-semibold uppercase">Blog</p>
        <h2 className="text-3xl font-bold mb-12">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
