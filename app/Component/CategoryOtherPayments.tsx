import Link from "next/link";
import React from "react";

interface CategoryOtherPaymentsProps {
  link: string;
  text: string;
}

const CategoryOtherPayments: React.FC<CategoryOtherPaymentsProps> = ({
  link,
  text,
}) => {
  return (
    <div>
      <Link
        href={link}
        className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
      >
        <h1>{text}</h1>
      </Link>
    </div>
  );
};

export default CategoryOtherPayments;
