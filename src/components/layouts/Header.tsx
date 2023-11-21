import React from "react";
import Images from "../ui/Image";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <div className="flex justify-center items-center w-full h-[160px] shadow-[0px_17px_25px_-10px_rgba(0,0,0,0.4)]">
      <Images src={logo} height={100} width={100} alt={"Cebu Logo"} />
      <div className="m-4 flex">
        <div className="border-solid border-2 border-black"></div>
        <div className="flex items-center">
          <div className="grid-cols-2 m-4">
            <Title text={"Welcome to the City of Cebu"} />
            <Subtitle
              text={"Transaction Kiosk"}
              className="text-[#335F96] font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
