import Link from "next/link";
import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";

interface NextBackButtonProps {
  text: string;
  link: string;
}

const NextBackButton: React.FC<NextBackButtonProps> = ({ text, link }) => {
  return (
    <div>
      {" "}
      <Link
        className="text-[40px] flex items-center gap-5 p-5 m-[20px] w-[200px]"
        href={link}
      >
        <BsArrowLeftRight size={50} className="text-[#335F96]" />
        <p className="font-semibold">{text}</p>
      </Link>
    </div>
  );
};

export default NextBackButton;
