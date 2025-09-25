'use client';

import Slide1 from '../assets/slide1.png'
import Slide2 from '../assets/slide2.png'
import Slide3 from '../assets/slide3.png'
import Slide4 from '../assets/slide4.png'
import { useState, useEffect } from "react";

const slides = [
  { id: 1, content: "Slide 1 Content", img: Slide1 },
  { id: 2, content: "Slide 1 Content", img: Slide2 },
  { id: 3, content: "Slide 1 Content", img: Slide3 },
  { id: 4, content: "Slide 1 Content", img: Slide4 },
  
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatic scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg h-fit">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
  <div 
    key={slide.id} 
    className={`flex-shrink-0 w-full h-90 flex items-center justify-center text-white text-2xl font-bold`}
  >
    {slide.img ? (
      <img src={slide.img.src} alt={slide.content} className="w-full h-full object-cover" />
    ) : (
      slide.content
    )}
  </div>
))}

      </div>
      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-gray-400"}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
