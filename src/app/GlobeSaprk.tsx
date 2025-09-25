import React from "react";

import { Sparkles } from "./componets/Sparkles"; // Custom Sparkles component for animated spark effects
import Earth from "./componets/Earth"; // Custom Earth component (probably 3D or animated)
import { ArrowRightIcon, Images } from "lucide-react"; // Icons from lucide-react

function index() {
  return (
    <>
      {/* Main container filling the screen */}
      <div className="h-screen w-full md:mt-20 mt-10 text-white">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          {/* Hero content section */}
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            {/* Main headline */}
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-400 via-white to-gray-400 ">
              From Ethiopia to the World
            </h1>

            {/* Subheadline / description */}
            <p className="mb-8 text-base sm:text-lg md:text-xl font-normal text-gray-300 dark:text-gray-300 sm:px-4 md:px-16 xl:px-48">
              Mo Tech Lab builds software, websites, and apps that turn ideas
              into reality. We create digital solutions that scale globally
              while staying rooted in innovation.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="gap-2 inline-flex justify-center items-center py-3 px-4 sm:px-5 text-base font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Let&apos;s Build Together
                <ArrowRightIcon className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="gap-2 inline-flex justify-center items-center py-3 px-4 sm:px-5 text-base font-medium  rounded-lg border-2 focus:ring-4  text-white border-gray-400 hover:bg-gray-100/10 focus:ring-gray-300"
              >
                <Images className="w-5 h-5" />
                View Our Work
              </a>
            </div>

            {/* Featured logos / stats section */}
            <div className="px-2 sm:px-4 mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full">
              <div className="bg-white/5 backdrop-blur-xs p-4 sm:p-6 rounded-2xl grid gap-2 border-2 border-white/15">
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  500+
                </h1>
                <p className="font-medium text-lg sm:text-2xl text-white/85 text-center">
                  Website Delivery
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-4 sm:p-6 rounded-2xl grid gap-2 border-2 border-white/15">
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  500+
                </h1>
                <p className="font-medium  text-lg sm:text-2xl text-white/85 text-center">
                  Website Delivery
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xs p-4 sm:p-6 rounded-2xl grid gap-2 border-2 border-white/15">
                <h1 className="text-3xl sm:text-5xl font-black text-white">
                  500+
                </h1>
                <p className="font-medium text-lg sm:text-2xl text-white/85 text-center">
                  Website Delivery
                </p>
              </div>
            </div>
          </div>

          {/* Background Earth animation section */}
          <div className="absolute inset-0 -z-10 w-full h-full">
            <Earth className="w-full h-full" />{" "}
            {/* Earth component fills entire background container */}
            {/* Sparkles and overlay effects */}
            <div
              className="absolute inset-0 h-full w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] 
                            before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 
                            after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b']"
            >
              <Sparkles
                density={1200}
                className="absolute inset-0 h-full w-full"
              />
              {/* Sparkles component overlays the Earth animation */}
              {/* density=1200 controls number of spark particles */}
            </div>
          </div>
        </article>

        {/* Bottom sparkle overlay section */}
        <div className="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]">
          <Sparkles
            density={1200}
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
          {/* This creates the floating sparkle effect at the bottom, adding depth to the animation */}
        </div>
      </div>
    </>
  );
}

export default index;
