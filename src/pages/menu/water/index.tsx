// pages/index.tsx
import React from "react";
import Carousel from "@/components/ui/CardCarousel";

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
];

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Responsive Card Carousel</h1>
      <Carousel items={items} />
    </div>
  );
};

export default Home;
