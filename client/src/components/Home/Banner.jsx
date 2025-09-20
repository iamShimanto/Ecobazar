// src/components/Banner.jsx
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-white container">
      <div className="col-span-2 relative rounded-2xl overflow-hidden bg-[url(/images/banner1.png)] bg-cover bg-no-repeat text-white p-8 flex items-center py-40 pl-15">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Fresh & Healthy <br /> Organic Food
          </h1>
          <p className="text-lg">
            Sale up to{" "}
            <span className="bg-orange-500 text-white px-2 py-1 rounded-md">
              30% OFF
            </span>
          </p>
          <p className="text-sm text-gray-200">
            Free shipping on all your order.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Shop now <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative rounded-2xl overflow-hidden bg-[url(/images/banner2.png)] bg-cover pt-8 pl-8 pb-30">
          <p className="uppercase font-semibold text-sm">Summer Sale</p>
          <h2 className="text-4xl font-bold mt-2">75% OFF</h2>
          <p className="text-sm text-gray-600 mt-1">Only Fruit & Vegetable</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-green-600 mt-4 font-semibold hover:underline"
          >
            Shop Now <FaArrowRight />
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden  text-white bg-[url(/images/banner3.png)] bg-cover pt-8 pl-8 pb-30">
          <p className="uppercase font-semibold text-sm">Best Deal</p>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Special Products <br /> Deal of the Month
          </h2>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-white mt-4 font-semibold hover:underline"
          >
            Shop Now <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
