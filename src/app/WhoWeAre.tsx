import Carousel from "./componets/Carousel";

const WhoWeAre = () => {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:gap-6 max-w-screen-xl w-full">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col p-4">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight dark:text-white">
            Who We Are
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-light text-gray-500 dark:text-gray-400 max-w-full">
            Mo Tech Lab is the technology arm of MO Business PLC. We design and
            deliver tailored websites, apps, and digital platforms for clients
            in Ethiopia and across the globe. With 20+ websites and 4 apps
            already delivered, we are committed to building smart, reliable, and
            scalable solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="p-4 rounded-2xl border-2 border-gray-500/25 grid gap-2 bg-gradient-to-br from-slate-800/80 to-slate-700/70">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">500+</h1>
              <p className="font-medium text-lg sm:text-xl text-white/85">
                Website Delivery
              </p>
            </div>
            <div className="p-4 rounded-2xl border-2 border-gray-500/25 grid gap-2 bg-gradient-to-br from-indigo-900/80 to-blue-800/80">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">500+</h1>
              <p className="font-medium text-lg sm:text-xl text-white/85">
                Website Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
