"use client";
import React, { useEffect, useRef } from "react";

const OurTeam = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experts = [
    {
      name: "Hiryakos Molla",
      position: "Frontend Developer | UI/UX Design Specialist",
      img: "/team/harry.png",
    },
    {
      name: "Hiryakos Molla",
      position: "Frontend Developer | UI/UX Design Specialist",
      img: "/team/harry.png",
    },
    {
      name: "Hiryakos Molla",
      position: "Frontend Developer | UI/UX Design Specialist",
      img: "/team/harry.png",
    },
    {
      name: "Hiryakos Molla",
      position: "Frontend Developer | UI/UX Design Specialist",
      img: "/team/harry.png",
    },
  ];

  // Duplicate the array to create the seamless looping effect
  const expertsDisplay = [...experts, ...experts];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const speed = 2;

    const scrollStep = () => {
      if (!scrollContainer) return;

      scrollAmount += speed;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        // Instantaneously jump back to the start of the first set (scrollAmount = 0)
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;

      requestAnimationFrame(scrollStep);
    };

    // Start the animation loop
    const animationFrame = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 md:my-40 my-25">
      <div className="mx-auto grid justify-center my-10">
        <div className="space-y-6 grid justify-center mb-10">
          <h1
            className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400"
          >
            Meet Our Team
          </h1>
          <p className="text-center text-normal md:text-xl sm:text-lg text-gray-300 ">
            The brilliant minds behind Mo Tech Lab
          </p>
        </div>

        <div className="relative w-screen overflow-hidden">
          {/* Gradient Overlay for the Left Edge (to "uncrop" the effect) */}
          <div className="absolute left-0 top-0 h-full md:w-100 w-20 z-10 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>

          <div
            ref={scrollRef}
            className="flex gap-3 p-2 sm:p-5"
            style={{
              whiteSpace: "nowrap",
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
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
                <h1 className="font-bold text-white text-base sm:text-lg flex items-center gap-1">
                  {expert.name}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="w-5 h-5 text-blue-500"
                      fill="currentColor"
                    >
                      <path d="M7.72237 1.77098C7.81734 2.00068 7.99965 2.18326 8.2292 2.27858L9.03413 2.61199C9.26384 2.70714 9.44635 2.88965 9.5415 3.11936C9.63665 3.34908 9.63665 3.60718 9.5415 3.83689L9.20833 4.64125C9.11313 4.87106 9.113 5.12943 9.20863 5.35913L9.54122 6.16325C9.58839 6.27702 9.61268 6.39897 9.6127 6.52214C9.61272 6.6453 9.58847 6.76726 9.54134 6.88105C9.4942 6.99484 9.42511 7.09823 9.33801 7.18531C9.2509 7.27238 9.14749 7.34144 9.03369 7.38854L8.22934 7.72171C7.99964 7.81669 7.81706 7.99899 7.72174 8.22855L7.38833 9.03348C7.29318 9.26319 7.11067 9.4457 6.88096 9.54085C6.65124 9.636 6.39314 9.636 6.16343 9.54085L5.35907 9.20767C5.12935 9.11276 4.87134 9.11295 4.64177 9.20821L3.83684 9.54115C3.60725 9.63608 3.34937 9.636 3.11984 9.54092C2.89032 9.44585 2.70791 9.26356 2.6127 9.03409L2.27918 8.22892C2.18421 7.99923 2.0019 7.81665 1.77235 7.72133L0.967421 7.38792C0.737807 7.29281 0.555355 7.11041 0.460169 6.88083C0.364983 6.65125 0.364854 6.39327 0.45981 6.16359L0.792984 5.35924C0.8879 5.12952 0.887707 4.87151 0.792445 4.64193L0.459749 3.83642C0.41258 3.72265 0.388291 3.60069 0.388272 3.47753C0.388252 3.35436 0.412501 3.2324 0.459634 3.11861C0.506767 3.00482 0.57586 2.90144 0.662965 2.81436C0.75007 2.72728 0.853479 2.65822 0.967283 2.61113L1.77164 2.27795C2.00113 2.18306 2.1836 2.00099 2.27899 1.7717L2.6124 0.966768C2.70755 0.737054 2.89006 0.554547 3.11978 0.459397C3.34949 0.364246 3.60759 0.364246 3.83731 0.459397L4.64166 0.792571C4.87138 0.887487 5.12939 0.887293 5.35897 0.792031L6.16424 0.459913C6.39392 0.364816 6.65197 0.364836 6.88164 0.459968C7.11131 0.555099 7.29379 0.737554 7.38895 0.967208L7.72247 1.77238L7.72237 1.77098Z" />
                      <path
                        d="M3 5.5l1.5 1.5L7.2 3.8"
                        stroke="white"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-gray-300 text-sm sm:text-base text-center break-words whitespace-normal">
                  {expert.position}
                </p>
              </div>
            ))}
          </div>

          {/* Gradient Overlay for the Right Edge */}
          <div className="absolute right-0 top-0 h-full md:w-100 w-20 z-10 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
