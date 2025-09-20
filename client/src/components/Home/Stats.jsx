import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaRegSmile, FaUserTie, FaShoppingCart } from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: <FaUsers className="text-green-500 text-4xl mb-2" />,
      value: 37,
      suffix: "+",
      label: "Years of Hard Work",
    },
    {
      icon: <FaRegSmile className="text-green-500 text-4xl mb-2" />,
      value: 500,
      suffix: "k+",
      label: "Happy Customer",
    },
    {
      icon: <FaUserTie className="text-green-500 text-4xl mb-2" />,
      value: 28,
      suffix: "",
      label: "Qualified Team Member",
    },
    {
      icon: <FaShoppingCart className="text-green-500 text-4xl mb-2" />,
      value: 750,
      suffix: "k+",
      label: "Monthly Orders",
    },
  ];

  return (
    <div className="bg-[#001009] py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6 px-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-sm"
          >
            {stat.icon}
            <h2 className="text-4xl font-bold text-green-400">
              <CountUp end={stat.value} duration={3} />
              {stat.suffix}
            </h2>
            <p className="text-white mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
