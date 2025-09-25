
import { Briefcase, Building, CreditCard, GraduationCap, Link, School, ShoppingCart, Smartphone } from "lucide-react";
import React from "react";

const WhatWeBuild = () => {
  const items = [
  {
    icon: <ShoppingCart size={32} />,
    title: "E-commerce Platforms",
    description:
      "Complete online stores with payment integration, inventory management, and analytics dashboard.",
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Mobile Responsive Design",
      "SEO Optimization",
    ],
  },
  {
    icon: <Briefcase size={32} />,
    title: "Job Portals",
    description:
      "Comprehensive recruitment platforms connecting employers with top talent across industries.",
    features: [
      "Advanced Search & Filters",
      "Application Tracking",
      "Resume Management",
      "Interview Scheduling",
    ],
  },
  {
    icon: <Building size={32} />,
    title: "Real Estate Solutions",
    description:
      "Property management systems with virtual tours, CRM integration, and lead generation.",
    features: [
      "Property Listings",
      "Virtual Tours",
      "CRM Integration",
      "Lead Management",
    ],
  },
  {
    icon: <GraduationCap size={32} />,
    title: "E-Learning Systems",
    description:
      "Interactive learning management systems with video streaming, assessments, and progress tracking.",
    features: [
      "Video Streaming",
      "Assessment Tools",
      "Progress Tracking",
      "Certificate Generation",
    ],
  },
  {
    icon: <CreditCard size={32} />,
    title: "Smart Card Solutions (NFC Tags)",
    description:
      "NFC-enabled smart card systems for access control, payments, and identity verification.",
    features: [
      "NFC Technology",
      "Access Control",
      "Payment Integration",
      "Security Features",
    ],
  },
  {
    icon: <Smartphone size={32} />,
    title: "Custom Web & Mobile Apps",
    description:
      "Bespoke applications tailored to your specific business needs and user requirements.",
    features: [
      "Cross-platform Development",
      "API Integration",
      "Cloud Deployment",
      "Maintenance & Support",
    ],
  },
];


  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 my-20">
      <div className="max-w-screen-xl mx-auto grid space-y-6 mb-12 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400">
          What We Build
        </h1>
        <p className="text-normal md:text-xl sm:text-lg text-gray-300">
          From concept to deployment, we create digital solutions that drive
          business growth and user engagement
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-screen-xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="grid gap-3 border border-gray-400/10 rounded-2xl p-4 sm:p-6 w-full"
          >
            <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 w-fit h-fit rounded-2xl">
              <p className="text-white">{item.icon}</p>
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
