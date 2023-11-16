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
      <Link href={link} className="text-[#000000]">
        <div className="w-[200px] h-[200px] bg-[#53bffb] rounded-[50%] flex items-center justify-center">
          {iconImg}
        </div>

        <h1 className="text-[24px] font-bold text-center pt-5 ">{title}</h1>
      </Link>
    </div>
  );
};

export default MenuButton;
