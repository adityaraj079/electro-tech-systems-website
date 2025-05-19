import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, src: '/slide1.png', alt: 'Slide 1' },
  { id: 2, src: '/slide2.png', alt: 'Slide 2' },
  { id: 3, src: '/slide3.png', alt: 'Slide 3' },
];

const ProductSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden relative p-2">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className="w-full max-w-full flex-shrink-0 max-h-[500px] object-contain"
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${current === index ? 'bg-[#ed6c1d]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlideshow;
