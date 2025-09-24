"use client";
import React, { useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";

const CountriesWeServed = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const countryData: Record<string, string> = {
    US: "United States",
    ET: "Ethiopia",
    AU: "Australia",
    CA: "Canada",
    SA: "Saudi Arabia",
    EG: "Egypt",
    NZ: "New Zealand",
  };

  const countryCodes = ["US", "ET", "AU", "CA", "SA", "EG", "NZ"];

  const experts = countryCodes.map((code) => ({
    code, // ISO code
    name: countryData[code], // full name
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
    <div className="grid justify-center overflow-hidden border border-gray-500/50 rounded-2xl m-10">
      <div className="p-5 grid justify-center gap-4">
        <h1 className="text-center text-4xl font-bold text-gray-200">
          🌍 countries we served
        </h1>
        <p className="text-center text-lg font-noramal text-gray-200">
          We've delivered digital solutions across 7 countries{" "}
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 p-5"
        style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
      >
        {expertsDisplay.map((expert, index) => (
          <div className="grid " key={index}>
            <div
              key={index}
              className="flex flex-col items-center w-45 h-30 bg-gray-100/2 p-4 rounded-lg flex-shrink-0 overflow-hidden"
            >
              <ReactCountryFlag
                countryCode={expert.code}
                svg
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
                title={expert.name}
              />
            </div>
            <h1 className="font-normal text-gray-200 text-normal text-center">
              {expert.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountriesWeServed;
