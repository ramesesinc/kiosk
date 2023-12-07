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
      <Button
        text={""}
        className="border-black border-2 h-[450px] w-full px-20 text-center flex flex-col items-center justify-start gap-10 pt-[50px] shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] uppercase relative"
        onClick={onClick}
      >
        <Images src={image} height={180} width={200} alt={""} />
        <div className="w-[150%] bg-black h-[2px]"></div>
        <Subtitle text={subtitle} className="font-bold text-[30px]" />
        <div className=" absolute bottom-0 bg-black text-white w-full rounded-b-2xl">
          <Title text={title} />
        </div>
      </Button>
    </div>
  );
};

export default Card;
