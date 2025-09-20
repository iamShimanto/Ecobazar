import React, { useEffect, useState } from "react";
import { Link } from "react-router";


// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 text-white font-bold text-lg">
      <div className="text-center">
        <p className="text-2xl">{timeLeft.days || "00"}</p>
        <span className="text-xs">DAYS</span>
      </div>
      <div className="text-center">
        <p className="text-2xl">{timeLeft.hours || "00"}</p>
        <span className="text-xs">HOURS</span>
      </div>
      <div className="text-center">
        <p className="text-2xl">{timeLeft.minutes || "00"}</p>
        <span className="text-xs">MINS</span>
      </div>
      <div className="text-center">
        <p className="text-2xl">{timeLeft.seconds || "00"}</p>
        <span className="text-xs">SECS</span>
      </div>
    </div>
  );
};

// Card Component with dynamic background
const BannerCard = ({ bgImg, subtitle, title, price, discount }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden flex flex-col justify-between p-6 text-white min-h-[350px]"
      style={{
        background: `url(${bgImg}) center/cover no-repeat`,
      }}
    >
      <div className="relative z-10 text-center">
        <p className="uppercase text-sm">{subtitle}</p>
        <h2 className="text-3xl font-bold mt-1">{title}</h2>
        {price && (
          <p className="mt-2 text-lg">
            Started at{" "}
            <span className="text-yellow-400 font-bold">{price}</span>
          </p>
        )}
        {discount && (
          <p className="mt-2 text-lg">
            Up to{" "}
            <span className="bg-black text-yellow-400 px-2 py-1 rounded">
              {discount}
            </span>
          </p>
        )}
      </div>

      {/* Timer only for Sale of the Month */}
      {subtitle === "Best Deals" && (
        <div className="my-4 relative z-10">
          <CountdownTimer targetDate="2025-12-31T23:59:59" />
        </div>
      )}

      <Link to="/shop" className="mt-6 text-center bg-white text-green-600 font-semibold px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition relative z-10">
        Shop Now →
      </Link>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

const SaleOfMonth = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container py-10 px-4">
      <BannerCard
        bgImg="/images/sale1.png"
        subtitle="Best Deals"
        title="Sale of the Month"
      />
      <BannerCard
        bgImg="/images/sale2.png"
        subtitle="85% Fat Free"
        title="Low-Fat Meat"
        price="$79.99"
      />
      <BannerCard
        bgImg="/images/sale3.png"
        subtitle="Summer Sale"
        title="100% Fresh Fruit"
        discount="64% OFF"
      />
    </div>
  );
};

export default SaleOfMonth;
