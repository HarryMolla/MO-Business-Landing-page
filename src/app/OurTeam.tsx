"use client";
import React, { useEffect, useRef } from "react";

const OurTeam = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experts = Array.from({ length: 24 }, (_, i) => ({
    name: `Name ${i + 1}`,
    position: "Position",
    img: "",
  }));

  const expertsDisplay = [...experts, ...experts];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 1;

    const scrollStep = () => {
      if (!scrollContainer) return;

      scrollAmount += speed;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;

      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid justify-center border border-gray-500/50 rounded-2xl overflow-hidden my-10">
        <div className="p-5 grid justify-center gap-4">
          <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-200">
            Meet Our Team
          </h1>
          <p className="text-center text-base sm:text-lg text-gray-200">
            The brilliant minds behind Mo Tech Lab
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-3 p-2 sm:p-5 overflow-x-hidden"
          style={{ whiteSpace: "nowrap" }}
        >
          {expertsDisplay.map((expert, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100/5 p-4 sm:p-5 rounded-lg w-56 sm:w-72 flex-shrink-0"
            >
              <img
                src={expert.img || "https://via.placeholder.com/96"}
                alt={expert.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-2 bg-amber-50"
              />
              <h1 className="font-semibold text-white text-lg sm:text-2xl text-center">
                {expert.name}
              </h1>
              <p className="text-gray-300 text-sm sm:text-base text-center">
                {expert.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
