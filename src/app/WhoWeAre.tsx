import Carousel from "./componets/Carousel";

const WhoWeAre = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col max-w-screen-xl md:flex-row md:gap-1">
        {/* Left Column */}
        <div className="md:w-1/2 p-4 flex flex-col">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Who We Are
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Mo Tech Lab is the technology arm of MO Business PLC. We design and
            deliver tailored websites, apps, and digital platforms for clients
            in Ethiopia and across the globe. With 20+ websites and 4 apps
            already delivered, we are committed to building smart, reliable, and
            scalable solutions.
          </p>
          <div className="text-left grid grid-cols-2 gap-3 w-full">
            <div className=" h-auto w-full p-4 rounded-2xl border-2 border-gray-500/25 grid gap-2">
              <h1 className="text-4xl font-bold text-white">500+</h1>
              <p className="font-medium text-lg text-white/85">
                website dillivery
              </p>
            </div>
            <div className=" h-auto w-full p-4 rounded-2xl border-2 border-gray-500/25 grid gap-2">
              <h1 className="text-4xl font-bold text-white">500+</h1>
              <p className="font-medium text-lg text-white/85">
                website dillivery
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/90 to-blue-800/80 my-5 p-8 rounded-2xl"> 
            <p className="text-lg text-white">✨ Trusted by global clients across 7 countries</p>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 p-4 flex">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
