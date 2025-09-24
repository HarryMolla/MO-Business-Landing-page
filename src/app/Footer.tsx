import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 p-10 md:m-10 m-2 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 md:text-left text-center">MO Tech Lab</h3>
            <p className="text-gray-400 md:text-left text-center">
              Building digital solutions that connect Ethiopia to the world. We transform ideas into reality through innovative technology and exceptional service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 md:text-left text-center">Quick Links</h4>
            <ul className="space-y-2 md:text-left text-center">
              <li><Link href="/" className="hover:text-blue-500 transition ">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-500 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-500 transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-blue-500 transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 md:text-left text-center">Services</h4>
            <ul className="space-y-2 md:text-left text-center">
              <li><Link href="/e-commerce" className="hover:text-blue-500 transition">E-commerce Platforms</Link></li>
              <li><Link href="/job-portals" className="hover:text-blue-500 transition">Job Portals</Link></li>
              <li><Link href="/real-estate" className="hover:text-blue-500 transition">Real Estate Solutions</Link></li>
              <li><Link href="/e-learning" className="hover:text-blue-500 transition">E-Learning Systems</Link></li>
              <li><Link href="/smart-card" className="hover:text-blue-500 transition">Smart Card Solutions</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 md:text-left text-center">MO Business PLC</h4>
            <ul className="space-y-2 md:text-left text-center">
              <li><Link href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-500 transition">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-500 transition">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          © 2025 MO Business PLC — Mo Tech Lab. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
