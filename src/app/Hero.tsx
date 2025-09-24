import {ArrowRightIcon, Images } from "lucide-react";



const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          From Ethiopia to the World
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Mo Tech Lab builds software, websites, and apps that turn ideas into
          reality. We create digital solutions that scale globally while staying
          rooted in innovation.
        </p>

        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="gap-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Let's Build Together
            <ArrowRightIcon/>
          </a>

          <a
            href="#"
            className="gap-2 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <Images/>
            View Our Work
          </a>
        </div>

        {/* Featured logos */}
        <div className="px-4 mx-auto text-center grid grid-cols-3 gap-6 w-10/12">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-600/80 h-40 w-full p-6 rounded-2xl grid col-auto gap-3 border-2 border-white/25">
            <h1 className="text-5xl font-black text-white">500+</h1>
            <p className="font-medium text-2xl text-white/85 text-center">
              website dillivery
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/80 h-40 w-full p-6 rounded-2xl grid col-auto gap-3 border-2 border-white/25">
            <h1 className="text-5xl font-black text-white">500+</h1>
            <p className="font-medium text-2xl text-white/85 text-center">
              website dillivery
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/90 to-purple-900/80 p-6 rounded-2xl grid col-auto gap-3 border-2 border-white/25">
            <h1 className="text-5xl font-black text-white">500+</h1>
            <p className="font-medium text-2xl text-white/85 text-center">
              website dillivery
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
