import React from "react";
import Button from "./Button";
import Images from "./Image";

import Subtitle from "./Subtitle";
import Title from "./Title";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, subtitle, image, onClick }) => {
  return (
    <div className="">
      <Button text={""} className=" border-none" onClick={onClick}>
        <div className="text-[50px] grid grid-cols-1 grid-flow-row gap-5">
          <div className="flex flex-col items-center justify-center">
            <Images src={image} height={230} width={250} alt={""} />
            <Title text={title} />
          </div>
        </div>
      </Button>
    </div>
  );
};

export default Card;
