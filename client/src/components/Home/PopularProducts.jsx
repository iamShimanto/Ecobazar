import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ProductCard from "../../utils/ProductCard";
import { Link } from "react-router";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("data.json");
      const result = await data.json();
      setProducts(result);
    })();
  }, []);

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
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
