import React, { useEffect, useState } from "react";
import ProductCard from "../../utils/ProductCard";

const ShopProducts = () => {
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
      <section>
        <div className="container">
          <div className="heading flex items-center justify-between my-10">
            <div className="flex flex-col space-y-3 w-full max-w-xs">
              <select
                id="fruits"
                defaultValue={"all"}
                className="w-50 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium shadow-md outline-none transition duration-200 ease-in-out hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select Category</option>
                <option value="fruit">Fruit</option>
                <option value="vegetables">Vegetables</option>
                <option value="snacks">Snacks</option>
                <option value="beverages">Beverages</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3 w-full max-w-xs">
              <select
                id="fruits"
                defaultValue={"16"}
                className="w-50 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 font-medium shadow-md outline-none transition duration-200 ease-in-out hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              >
                <option value="16">Show: 16</option>
                <option value="24">Show: 24</option>
                <option value="32">Show: 32</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-10">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProducts;
