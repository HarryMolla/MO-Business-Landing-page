"use client";
import React, { useEffect, useRef } from "react";
import { Codepen } from "lucide-react";

type LogoType = {
  name: string;
  src: string; // image or icon
};

const logos: LogoType[] = [
  { name: "Company 1", src: "/logo1.png" },
  { name: "Company 2", src: "/logo2.png" },
  { name: "Company 3", src: "/logo3.png" },
  { name: "Company 4", src: "/logo4.png" },
  { name: "Company 5", src: "/logo5.png" },
];

const InfiniteLogos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const logosDisplay = [...logos, ...logos, ...logos]; // duplicate for seamless looping

  useEffect(() => {
    const speed = 0.5; // pixels per frame
    let position = 0;

    const step = () => {
      const container = containerRef.current;
      if (!container) return;

      const totalWidth = container.scrollWidth / 2;

      position += speed;
      if (position >= totalWidth) position -= totalWidth;
      if (position < 0) position += totalWidth;

      container.style.transform = `translateX(${-position}px)`;

      const logoNodes = Array.from(container.children) as HTMLDivElement[];
      logoNodes.forEach((logo) => {
        const logoOffsetLeft = logo.offsetLeft - position;
        const containerWidth = container.parentElement?.offsetWidth || 0;

        const distanceFromCenter = Math.abs(
          containerWidth / 2 - (logoOffsetLeft + logo.offsetWidth / 2)
        );
        const maxDistance = containerWidth / 2 + logo.offsetWidth / 2;

        const scale = 1 - Math.min(distanceFromCenter / maxDistance, 0.2);
        const opacity = 1 - Math.min(distanceFromCenter / maxDistance, 0.5);

        logo.style.transform = `scale(${scale})`;
        logo.style.opacity = `${opacity}`;
      });

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

 return (
  <div className="h-fit py-12"> {/* remove mt-20, use vertical padding */}
    <div className="text-center space-y-3 px-4 mb-8"> {/* added mb-8 to control spacing */}
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-200">
        Trusted by businesses in Ethiopia and beyond
      </h1>
      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
        Our clients trust us to deliver exceptional results
      </p>
    </div>

    <section className="relative min-h-[400px] flex items-center px-4 sm:px-6 lg:px-8">
      <div ref={containerRef} className="flex gap-2 absolute z-10">
        {logosDisplay.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-lg bg-white/5 border border-white/20 p-4"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <Codepen size={32} className="text-white" />
            )}
          </div>
        ))}
      </div>
    </section>
  </div>
);

};

export default InfiniteLogos;
