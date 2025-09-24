'use client';
import React, { useEffect, useRef } from 'react';

const OurTeam: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experts = Array.from({ length: 24 }, (_, i) => ({
    name: `Name ${i + 1}`,
    position: 'Position',
    img: '', 
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
    <div className="overflow-hidden border border-gray-500/50 rounded-2xl m-10">
      <div
        ref={scrollRef}
        className="flex gap-5 p-5"
        style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}
      >
        {expertsDisplay.map((expert, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100/2 p-5 rounded-lg min-w-[190px] flex-shrink-0"
          >
            <img
              src={expert.img || 'https://via.placeholder.com/96'}
              alt={expert.name}
              className="w-24 h-24 rounded-full mb-2 bg-amber-50"
            />
            <h1 className="font-semibold text-white">{expert.name}</h1>
            <p className="text-gray-500">{expert.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
