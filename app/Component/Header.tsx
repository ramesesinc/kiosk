/* eslint-disable @next/next/no-img-element */
import React from "react";

interface HeaderProps {
  logoImg: string;
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ logoImg, title, description }) => {
  return (
    <div className="flex shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.4)]">
      <img className="m-8 h-[150px] h-contain" src={logoImg} alt="" />
      <div className=" border-solid border-2 border-black mt-[35px] mb-[35px]"></div>
      <div className="flex justify-center items-center">
        <div className="grid-cols-2 m-8 font-serif">
          <div className="text-3xl font-bold uppercase">{title}</div>
          <div className="text-2xl">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
