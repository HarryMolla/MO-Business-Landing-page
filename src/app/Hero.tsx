import { ArrowRightIcon, Images } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen mt-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-gray-900 dark:text-white">
          From Ethiopia to the World
        </h1>

        <p className="mb-8 text-base sm:text-lg md:text-xl font-normal text-gray-500 dark:text-gray-400 sm:px-4 md:px-16 xl:px-48">
          Mo Tech Lab builds software, websites, and apps that turn ideas into
          reality. We create digital solutions that scale globally while staying
          rooted in innovation.
        </p>

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
            className="gap-2 inline-flex justify-center items-center py-3 px-4 sm:px-5 text-base font-medium text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <Images className="w-5 h-5" />
            View Our Work
          </a>
        </div>

        {/* Featured logos */}
        <div className="px-2 sm:px-4 mx-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-full">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-600/80 p-4 sm:p-6 rounded-2xl grid gap-2 border-2 border-white/25">
            <h1 className="text-3xl sm:text-5xl font-black text-white">500+</h1>
            <p className="font-medium text-lg sm:text-2xl text-white/85 text-center">
              Website Delivery
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/80 p-4 sm:p-6 rounded-2xl grid gap-2 border-2 border-white/25">
            <h1 className="text-3xl sm:text-5xl font-black text-white">500+</h1>
            <p className="font-medium text-lg sm:text-2xl text-white/85 text-center">
              Website Delivery
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/90 to-purple-900/80 p-4 sm:p-6 rounded-2xl grid gap-2 border-2 border-white/25">
            <h1 className="text-3xl sm:text-5xl font-black text-white">500+</h1>
            <p className="font-medium text-lg sm:text-2xl text-white/85 text-center">
              Website Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
