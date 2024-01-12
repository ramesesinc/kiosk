import React, { ReactNode, useState } from "react";
import Input from "../../ui/Input";
import Paragraph from "../../ui/Paragraph";
import Title from "../../ui/Title";
import Images from "../../ui/Image";
import { FaArrowDown } from "react-icons/fa6";
import Keyboard from "@/components/keyboard/Keyboard";

interface BillingNumberProps {
  placeholder: string;
  onInputChange?: (value: string) => void; // New prop for handling input changes
}

const BillingNumber: React.FC<BillingNumberProps> = ({
  placeholder,
  onInputChange,
}) => {
  const handleInputChange = (value: string) => {
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <div className="text-[50px] flex flex-col justify-center items-center w-full gap-10">
      <div className="m-5">
        <Input
          placeholder={placeholder}
          className="border-2 border-gray-400"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full flex items-center justify-center gap-5">
        <div className="w-[30%] h-[2px] bg-black "></div>
        <Paragraph text={"OR"} />
        <div className="w-[30%] h-[2px] bg-black "></div>
      </div>

      <Title text={"Scan QR here..."} className="capitalize" />
      <div className="text-green-500 absolute top-[810px] left-[430px] animate-bounce ">
        <FaArrowDown />
      </div>
      <div className="">
        <Images src={"/images/kiosk.png"} height={300} width={200} alt={""} />
      </div>
      <Keyboard />
    </div>
  );
};

export default BillingNumber;
