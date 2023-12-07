import React, { ReactNode, useState } from "react";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Title from "../../ui/Title";
import Images from "../../ui/Image";
import Keyboard from "@/components/keyboard/Keyboard";

interface BillingNumberProps {
  paragraph: string;
  title: string;
  image: string;
  icon: ReactNode;
  placeholder: string;
  onInputChange?: (value: string) => void; // New prop for handling input changes
}

const BillingNumber: React.FC<BillingNumberProps> = ({
  paragraph,
  title,
  image,
  icon,
  placeholder,
  onInputChange,
}) => {
  const handleInputChange = (value: string) => {
    // Call the onInputChange prop if provided
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <div className="text-[50px] flex flex-col items-center justify-center gap-10">
      <div className="m-5">
        <Input
          placeholder={placeholder}
          className="border-2 border-gray-400"
          onChange={handleInputChange} // Pass the handleInputChange function to Input
        />
      </div>
      <div className="w-full flex items-center justify-center gap-5">
        <div className="w-[30%] h-[2px] bg-black "></div>
        <Paragraph text={paragraph} />
        <div className="w-[30%] h-[2px] bg-black "></div>
      </div>

      <Title text={title} className="capitalize" />
      <div className="text-green-500 absolute top-[815px] left-[450px] animate-bounce ">
        {icon}
      </div>
      <div className="">
        <Images src={image} height={300} width={250} alt={""} />
      </div>
    </div>
  );
};

export default BillingNumber;
