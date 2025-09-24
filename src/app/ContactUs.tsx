"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const ContactUs: React.FC = () => {
  const features = [
    "6+ years of proven expertise",
    "20+ successful projects delivered",
    "Global reach across 7 countries",
    "24/7 support and maintenance",
    "Competitive pricing with quality assurance",
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Left Column: Contact Cards */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-white">Get In Touch</h2>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 p-5 bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Mail size={28} className="text-blue-500" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Email</p>
                <p className="text-white text-lg font-medium">info@mobusinessplc.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Phone size={28} className="text-blue-500" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Phone</p>
                <p className="text-white text-lg font-medium">+251 911 123 456</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin size={28} className="text-blue-500" />
              <div>
                <p className="text-gray-400 uppercase text-sm">Location</p>
                <p className="text-white text-lg font-medium">
                  Addis Ababa, Ethiopia <span className="text-gray-400">(with global reach)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Why Choose Us */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">Why Choose Mo Tech Lab?</h3>
          <ul className="space-y-4">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 bg-gray-800/70 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="mt-1 w-3 h-3 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-gray-300">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
