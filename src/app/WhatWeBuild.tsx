import { ShoppingCart } from "lucide-react";
import React from "react";

const WhatWeBuild = () => {
  const items = Array.from({ length: 6 }, (_, i) => ({
    title: "🛒 E-commerce Platforms",
    description:
      "Complete online stores with payment integration, inventory management, and analytics dashboard.",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Mobile Responsive Design",
      "SEO Optimization",
    ],
  }));

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 my-20">
      <div className="max-w-screen-xl mx-auto grid gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          What We Build
        </h1>
        <p className="text-base sm:text-lg text-gray-200">
          From concept to deployment, we create digital solutions that drive
          business growth and user engagement
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-screen-xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid gap-4 border border-gray-600/50 rounded-2xl p-4 sm:p-6 w-full"
          >
            <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-400 to-emerald-600 w-fit h-fit rounded-2xl">
              <ShoppingCart size={32} className="text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base font-normal text-gray-300">
              {item.description}
            </p>
            <ul className="text-gray-200 text-sm sm:text-base list-disc list-inside">
              {item.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeBuild;
