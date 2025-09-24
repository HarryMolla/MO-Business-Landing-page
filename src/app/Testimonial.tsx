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
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="p-2 rounded-full bg-white/10 flex items-center justify-center">
                <UserCircle size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Hiryakos Molla
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
      <div className="p-5 grid justify-center gap-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-200">
          What Our Clients Say
        </h1>
        <p className="text-base sm:text-lg text-gray-200">
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