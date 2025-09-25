import { BookOpen, Briefcase, CreditCard, Factory, Globe, Heart, Home, Landmark, Megaphone, ShoppingCart, Users } from "lucide-react";
import React from "react";

const IndustriesWeServed = () => {
  const items = [
  {
    icon: <Landmark size={32} className="text-emerald-400 text-center" />,
    title: "Government",
    description: "Digital transformation for public services",
  },
  {
    icon: <Users size={32} className="text-emerald-400 text-center" />,
    title: "NGOs & Non-Profits",
    description: "Platforms for social impact",
  },
  {
    icon: <Home size={32} className="text-emerald-400 text-center" />,
    title: "Hotels & Hospitality",
    description: "Booking and management systems",
  },
  {
    icon: <Briefcase size={32} className="text-emerald-400 text-center" />,
    title: "Consulting Firms",
    description: "Professional service platforms",
  },
  {
    icon: <Globe size={32} className="text-emerald-400 text-center" />,
    title: "Tour & Travel",
    description: "Travel booking and management",
  },
  {
    icon: <BookOpen size={32} className="text-emerald-400 text-center" />,
    title: "E-Learning",
    description: "Educational technology platforms",
  },
  {
    icon: <CreditCard size={32} className="text-emerald-400 text-center" />,
    title: "Smart Card Solutions",
    description: "NFC and access control systems",
  },
  {
    icon: <Home size={32} className="text-emerald-400 text-center" />,
    title: "Real Estate",
    description: "Property management solutions",
  },
  {
    icon: <ShoppingCart size={32} className="text-emerald-400 text-center" />,
    title: "E-commerce",
    description: "Online retail solutions",
  },
  {
    icon: <Factory size={32} className="text-emerald-400 text-center" />,
    title: "Manufacturing",
    description: "Production and inventory management systems",
  },
  {
    icon: <Megaphone size={32} className="text-emerald-400 text-center" />,
    title: "Advertising",
    description: "Marketing and campaign platforms",
  },
  {
    icon: <Heart size={32} className="text-emerald-400 text-center" />,
    title: "Healthcare",
    description: "Medical management systems",
  },
];

  return (
    <div className="grid col-auto h-fit my-20 justify-center mx-auto max-w-screen-xl">
      <div className="grid space-y-6">
        <h1
          className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400"
        >
          Industries We Serve
        </h1>
        <p className="text-center md:text-xl text-lg text-gray-300 ">
          Diverse Sectors, One Standard of Excellence
        </p>
      </div>
      <div className="grid md:grid-cols-4 mt-6 gap-4 p-6 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid gap-2 border border-gray-400/10 rounded-2xl p-6 justify-items-center"
          >
            <div className="p-4 bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 w-fit h-fit rounded-2xl">
              {item.icon}
            </div>
            <h1 className="text-lg font-bold text-white text-center">
              {item.title}
            </h1>
            <p className="text-normal font-normal text-gray-300 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServed;
