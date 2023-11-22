import React from "react";
import Images from "../ui/Image";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <div className="flex items-center w-full h-[200px] shadow-[0px_17px_25px_-10px_rgba(0,0,0,0.4)]">
      <div className="m-10">
      <Images src={logo} height={150} width={150} alt={"Cebu Logo"} />
      </div>
      <div className="flex">
        <div className="border-solid border-2 border-black h-28"></div>
        <div className="flex items-center">
          <div className="grid-cols-2 ml-10">
            <Title text={"Welcome to the City of Cebu"} />
            <Subtitle
              text={"Transaction Kiosk"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
