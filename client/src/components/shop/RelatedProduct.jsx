import React, { useEffect, useState } from "react";
import ProductCard from "../../utils/ProductCard";

const RelatedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/data.json");
      const result = await data.json();
      console.log(result);
      setProducts(result);
    })();
  }, []);
  return (
    <>
      <h3 className="text-xl font-bold text-center mb-8">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProduct;
