import Button from "@/components/ui/Button";
import Images from "@/components/ui/Image";
import Input from "@/components/ui/Input";
import Paragraph from "@/components/ui/Paragraph";
import Title from "@/components/ui/Title";
import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const index = () => {
  return (
    <div className="">
      <div className="m-8 text-[50px] flex flex-col items-center justify-center gap-10 bg-red-300">
        <div className="m-5">
          <Input placeholder={"type here"} />
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          <div className="w-[30%] h-[2px] bg-black "></div>
          <Paragraph text={"OR"} />
          <div className="w-[30%] h-[2px] bg-black "></div>
        </div>

        <Title text={"Scan qr here"} />
        <div className="text-green-500 absolute bottom-[760px] left-[340px] animate-bounce">
          <FaArrowDown size={40} />
        </div>
        <Images src={"/images/guide.png"} height={100} width={250} alt={""} />
      </div>
      <div className="text-[30px] gap-20 flex justify-center items-center absolute bottom-48 w-full">
        <Button text={"Back"} href="/menu" />
        <div className="">
          <Button text={"Next"} href="/" className="bg-light-blue text-white" />
        </div>
      </div>
    </div>
  );
};

export default index;
