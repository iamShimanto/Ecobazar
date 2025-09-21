import React, { useEffect, useState } from "react";

const DiscountBanner = () => {
  // Set target time (e.g., 2 hours from now)
  const targetDate = new Date().getTime() + 2 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        setTimeLeft({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
          ).padStart(2, "0"),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
            2,
            "0"
          ),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative bg-[url(/images/discountbannar.png)] bg-cover bg-no-repeat rounded-xl overflow-hidden flex items-center justify-between px-10 py-12 container mb-5">
      <div className="container ">
        <p className="text-sm uppercase text-white">Best Deals</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Sale of the Month
        </h2>

        <div className="flex gap-6 text-center mb-6">
          <div>
            <p className="text-green-600 font-bold text-2xl">{timeLeft.days}</p>
            <span className="text-gray-500 text-xs">Days</span>
          </div>
          <div>
            <p className="text-green-600 font-bold text-2xl">
              {timeLeft.hours}
            </p>
            <span className="text-gray-500 text-xs">Hours</span>
          </div>
          <div>
            <p className="text-green-600 font-bold text-2xl">
              {timeLeft.minutes}
            </p>
            <span className="text-gray-500 text-xs">Mins</span>
          </div>
          <div>
            <p className="text-green-600 font-bold text-2xl">
              {timeLeft.seconds}
            </p>
            <span className="text-gray-500 text-xs">Secs</span>
          </div>
        </div>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition cursor-pointer">
          Shop Now →
        </button>
      </div>

      <div className="absolute top-6 left-60 bg-orange-500 text-white text-lg font-bold px-4 py-2 rounded-full shadow">
        56% OFF
      </div>

      {/* Right Image */}
      {/* <div className="hidden md:block">
        <img
          src="/images/discount-banner.png"
          alt="Discount Banner"
          className="w-[400px] h-auto object-cover"
        />
      </div> */}
    </div>
  );
};

export default DiscountBanner;
