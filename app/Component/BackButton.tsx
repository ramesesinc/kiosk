import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton: React.FC<BackButtonProps> = ({ text, link }) => {
  return (
    <>
      <Link
        className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
        href={link}
      >
        <MdKeyboardBackspace size={40} className="text-[#335F96]" />
        <p>{text}example push to githubs</p>
      </Link>
    </>
  );
};

export default BackButton;
