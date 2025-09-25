import Counter from "./componets/AnimatedCounter";
import Carousel from "./componets/Carousel";

const WhoWeAre = () => {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 lg:px-8 h-fit md:mt-15 mb-25">
      <div className="flex flex-col md:flex-row md:gap-6 max-w-screen-xl w-full">
        {/* Left Column */}
        <div className="md:w-1/2 flex flex-col p-4">
          <h1 className="mb-4 text-2xl sm:text-4xl font-bold md:text-left text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400">
            Who We Are
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl font-normal text-gray-300 max-w-full md:text-left text-center">
            Mo Tech Lab is the technology arm of MO Business PLC. We design and
            deliver tailored websites, apps, and digital platforms for clients
            in Ethiopia and across the globe. With 20+ websites and 4 apps
            already delivered, we are committed to building smart, reliable, and
            scalable solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="p-4 rounded-2xl border-2 border-gray-500/25 grid gap-2 bg-gradient-to-br from-slate-800/80 to-slate-700/70">
              <h1 className="text-3xl sm:text-4xl font-bold text-white md:text-left text-center">
                <Counter end={7} suffix=" +" duration={10} />
                </h1>
              <p className="font-medium text-lg sm:text-xl text-white/85 md:text-left text-center">
                Years of Expertise
              </p>
            </div>
            <div className="p-4 rounded-2xl border-2 border-gray-500/25 grid gap-2 bg-gradient-to-br from-slate-800/80 to-slate-700/70">
              <h1 className="text-3xl sm:text-4xl font-bold text-white md:text-left text-center">
                <Counter end={100} suffix=" %" duration={6} />
                </h1>
              <p className="font-medium text-lg sm:text-xl text-white/85 md:text-left text-center">
                Client Satisfaction
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
