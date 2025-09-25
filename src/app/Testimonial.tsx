'use client';
import { Codepen, UserCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";

type CardType = {
  title: string;
  description: string;
};

const cards: CardType[] = [
  { title: "Card 1", description: "Description 1" },
  { title: "Card 2", description: "Description 2" },
  { title: "Card 3", description: "Description 3" },
];

const InfiniteColumns: React.FC = () => {
  const columnRefs: React.RefObject<HTMLDivElement | null>[] = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const cardsDisplay = [...cards, ...cards, ...cards]; // duplicate for seamless looping

  useEffect(() => {
    const speeds = [0.5, -0.3, 0.4]; // pixels per frame
    const positions = [0, 60, 120]; // staggered starting positions

    const step = () => {
      columnRefs.forEach((ref, i) => {
        const container = ref.current;
        if (!container) return;

        const totalHeight = container.scrollHeight / 2;

        positions[i] += speeds[i];
        if (positions[i] >= totalHeight) positions[i] -= totalHeight;
        if (positions[i] < 0) positions[i] += totalHeight;

        container.style.transform = `translateY(${-positions[i]}px)`;

        const cardsNodes = Array.from(container.children) as HTMLDivElement[];
        cardsNodes.forEach((card) => {
          const cardOffsetTop = card.offsetTop - positions[i];
          const containerHeight = container.parentElement?.offsetHeight || 0;

          const distanceFromCenter = Math.abs(
            containerHeight / 2 - (cardOffsetTop + card.offsetHeight / 2)
          );
          const maxDistance = containerHeight / 2 + card.offsetHeight / 2;

          const scale = 1 - Math.min(distanceFromCenter / maxDistance, 0.1);
          const opacity = 1 - Math.min(distanceFromCenter / maxDistance, 0.7);

          card.style.transform = `scale(${scale})`;
          card.style.opacity = `${opacity}`;
        });
      });

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const renderColumn = (ref: React.RefObject<HTMLDivElement | null>, extraClass: string = "") => (
    <div className={`flex-1 mx-2 relative overflow-hidden min-h-[60vh] sm:min-h-[400px] md:min-h-[600px] ${extraClass}`}>
      <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none" />

      <div ref={ref} className="flex flex-col gap-3 absolute w-full">
        {cardsDisplay.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] p-4 sm:p-6 min-h-[220px] rounded-lg border border-white/20 bg-white/5 hover:scale-[1.02] transition-transform duration-200"
          >
            <Codepen size={32} className="text-white" />

            <p className="text-gray-300 mt-4 flex-1 text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text
              ever since the 1500s.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="p-2 rounded-full bg-white/10 flex items-center justify-center">
                <UserCircle size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg flex items-center gap-1">
                  Hiryakos Molla
                  <span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 11 11"
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                  >
                    {/* Blue badge (kept as-is) */}
                    <path d="M7.72237 1.77098C7.81734 2.00068 7.99965 2.18326 8.2292 2.27858L9.03413 2.61199C9.26384 2.70714 9.44635 2.88965 9.5415 3.11936C9.63665 3.34908 9.63665 3.60718 9.5415 3.83689L9.20833 4.64125C9.11313 4.87106 9.113 5.12943 9.20863 5.35913L9.54122 6.16325C9.58839 6.27702 9.61268 6.39897 9.6127 6.52214C9.61272 6.6453 9.58847 6.76726 9.54134 6.88105C9.4942 6.99484 9.42511 7.09823 9.33801 7.18531C9.2509 7.27238 9.14749 7.34144 9.03369 7.38854L8.22934 7.72171C7.99964 7.81669 7.81706 7.99899 7.72174 8.22855L7.38833 9.03348C7.29318 9.26319 7.11067 9.4457 6.88096 9.54085C6.65124 9.636 6.39314 9.636 6.16343 9.54085L5.35907 9.20767C5.12935 9.11276 4.87134 9.11295 4.64177 9.20821L3.83684 9.54115C3.60725 9.63608 3.34937 9.636 3.11984 9.54092C2.89032 9.44585 2.70791 9.26356 2.6127 9.03409L2.27918 8.22892C2.18421 7.99923 2.0019 7.81665 1.77235 7.72133L0.967421 7.38792C0.737807 7.29281 0.555355 7.11041 0.460169 6.88083C0.364983 6.65125 0.364854 6.39327 0.45981 6.16359L0.792984 5.35924C0.8879 5.12952 0.887707 4.87151 0.792445 4.64193L0.459749 3.83642C0.41258 3.72265 0.388291 3.60069 0.388272 3.47753C0.388252 3.35436 0.412501 3.2324 0.459634 3.11861C0.506767 3.00482 0.57586 2.90144 0.662965 2.81436C0.75007 2.72728 0.853479 2.65822 0.967283 2.61113L1.77164 2.27795C2.00113 2.18306 2.1836 2.00099 2.27899 1.7717L2.6124 0.966768C2.70755 0.737054 2.89006 0.554547 3.11978 0.459397C3.34949 0.364246 3.60759 0.364246 3.83731 0.459397L4.64166 0.792571C4.87138 0.887487 5.12939 0.887293 5.35897 0.792031L6.16424 0.459913C6.39392 0.364816 6.65197 0.364836 6.88164 0.459968C7.11131 0.555099 7.29379 0.737554 7.38895 0.967208L7.72247 1.77238L7.72237 1.77098Z" />

                    {/* White check — moved slightly left so tail doesn't touch the edge */}
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
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Front end and UI/UX
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid justify-center text-center space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400">
          What Our Clients Say
        </h1>
        <p className="text-normal md:text-xl sm:text-lg text-gray-300">
          Real feedback from real clients who trust Mo Tech Lab
        </p>
      </div>

      <div className="flex gap-2 sm:gap-4 mt-10">
        {renderColumn(columnRefs[0])}
        {renderColumn(columnRefs[1], "hidden sm:block")}
        {renderColumn(columnRefs[2], "hidden lg:block")}
      </div>
    </section>
  );
};

export default InfiniteColumns;