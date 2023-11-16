import Link from "next/link";
import React from "react";

interface CancelBtnProps {
  link: string;
  text: string;
  bgcolor: string;
}

const CancelBtn: React.FC<CancelBtnProps> = ({ link, text, bgcolor }) => {
  return (
    <div>
      <Link href={link}>
        <button
          className="w-[250px] h-[80px] rounded-2xl border border-gray-400 shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
          style={{ backgroundColor: bgcolor }}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default CancelBtn;
