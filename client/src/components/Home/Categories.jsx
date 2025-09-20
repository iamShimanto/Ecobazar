// src/components/Categories.jsx
import { Link } from "react-router"; 
import { FaArrowRight } from "react-icons/fa";

const categories = [
  { name: "Fresh Fruit", img: "/images/categories/fruit.png" },
  {
    name: "Fresh Vegetables",
    img: "/images/categories/vegetables.png",
    active: true,
  },
  { name: "Meat & Fish", img: "/images/categories/meat.png" },
  { name: "Snacks", img: "/images/categories/snacks.png" },
  { name: "Beverages", img: "/images/categories/beverages.png" },
  { name: "Beauty & Health", img: "/images/categories/beauty.png" },
  { name: "Bread & Bakery", img: "/images/categories/bakery.png" },
  { name: "Baking Needs", img: "/images/categories/baking.png" },
  { name: "Cooking", img: "/images/categories/cooking.png" },
  { name: "Diabetic Food", img: "/images/categories/diabetic.png" },
  { name: "Dish Detergents", img: "/images/categories/detergents.png" },
  { name: "Oil", img: "/images/categories/oil.png" },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Categories</h2>
        <Link
          to="/categories"
          className="flex items-center gap-2 text-green-600 font-semibold hover:underline"
        >
          View All <FaArrowRight />
        </Link>
      </div>

      {/* Grid with 6 items even on mobile */}
      <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`rounded-xl border bg-white shadow-sm flex flex-col items-center justify-center p-4 cursor-pointer transition hover:scale-105
              ${cat.active ? "border-2 border-green-200" : "border-gray-200"}`}
          >
            <img src={cat.img} alt={cat.name} className="h-16 w-auto mb-2" />
            <h3 className="text-xs font-semibold text-gray-700 text-center">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
