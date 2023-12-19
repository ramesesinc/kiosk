// components/Carousel.tsx
import React, { useState } from "react";

interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const carouselStyle = {
    "--currentIndex": currentIndex,
  } as any;

  return (
    <div
      className="relative w-full max-w-screen-lg mx-auto"
      onWheel={handleScroll}
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300 ease-in-out transform translate-x-[calc(-100%*var(--currentIndex))] h-64"
          style={carouselStyle}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              {/* Your card component */}
              <div className="p-4 bg-white border shadow-md">{item}</div>
              <div className="p-4 bg-white border shadow-md">{item}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
