import Link from "next/link";
import React, { ReactNode } from "react";

interface MenuButtonProps {
  link: string;
  iconImg: ReactNode;
  title: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ link, iconImg, title }) => {
  return (
    <div className="uppercase">
      <Link href={link} className="text-[#335F96]">
        <div className="w-[200px] h-[200px] bg-white rounded-[50%] text-[#335F96] shadow-[-20px_18px_15px_-10px_rgba(0,0,0,0.3)] border border-[#335F96] flex items-center justify-center">
          {iconImg}
        </div>

        <h1 className="text-[24px] font-bold text-center pt-5 ">{title}</h1>
      </Link>
    </div>
  );
};

export default MenuButton;
