import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "../../utils/ProductCard";
import { Link } from "react-router";

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: "Green Apple",
      price: 14.99,
      originalPrice: 20.99,
      rating: 4.5,
      isSale: true,
      salePercentage: 50,
      image:
        "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Fresh Indian Malta",
      price: 20.0,
      rating: 5,
      image:
        "https://cdn.create.vista.com/api/media/small/490036172/stock-photo-freshly-plucked-citrus-fruits-harvested-put-wicker-basket-open-area",
    },
    {
      id: 3,
      name: "Chinese Cabbage",
      price: 12.0,
      rating: 4.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JXMXRYzQSz-AIupcKzE38v1zai5mKBs_Kg&s",
      isHighlighted: true, // To match the image's highlighted item
    },
    {
      id: 4,
      name: "Green Lettuce",
      price: 9.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Eggplant",
      price: 34.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1613881553903-4543f5f2cac9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdncGxhbnRzfGVufDB8fDB8fHww",
    },
    {
      id: 6,
      name: "Big Potatoes",
      price: 20.0,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "Corn",
      price: 20.0,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Fresh Cauliflower",
      price: 12.0,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1692956706779-576c151ec712?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F1bGlmbG93ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 9,
      name: "Green Capsicum",
      price: 9.0,
      originalPrice: 20.99,
      rating: 4.5,
      isSale: true,
      salePercentage: 50,
      image:
        "https://images.unsplash.com/photo-1683333660271-3a6823b4a066?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "Green Chili",
      price: 34.0,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1524593410820-38510f580a77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 my-5 p-4 sm:p-6 md:p-8">
        <div className="container">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Popular Products
            </h1>

            <Link
              to="/shop"
              className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All
              <FiArrowRight />
            </Link>
          </header>

          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
