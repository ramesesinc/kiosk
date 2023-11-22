import React, { ReactNode } from "react";
import Input from "../ui/Input";
import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";

import Images from "../ui/Image";

interface BillingNumberProps {
  placeholder: string;
  paragraph: string;
  title: string;
  image: string;
  icon: ReactNode;
}

const BillingNumber: React.FC<BillingNumberProps> = ({
  placeholder,
  paragraph,
  title,
  image,
  icon,
}) => {
  return (
    <div>
      <div className="m-8 text-[50px] flex flex-col items-center justify-center gap-10 ">
        <div className="m-5">
          <Input
            placeholder={placeholder}
            className="border-2 border-gray-400"
            required
          />
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          <div className="w-[30%] h-[2px] bg-black "></div>
          <Paragraph text={paragraph} />
          <div className="w-[30%] h-[2px] bg-black "></div>
        </div>

        <Title text={title} className="capitalize" />
        <div className="text-green-500 absolute top-[870px] left-[435px] animate-bounce">
          {icon}
        </div>
        <Images src={image} height={100} width={320} alt={""} />
      </div>
    </div>
  );
};

export default BillingNumber;
