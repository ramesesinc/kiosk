import React from "react";
import Button from "../ui/Button";

interface QueueListProps {
  text: string;
  className?: string;
}

const QueueList: React.FC<QueueListProps> = ({ text, className }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`w-full h-24 flex items-center justify-center  border border-[#335F96] rounded-2xl shadow-[-20px_22px_15px_-10px_rgba(0,0,0,0.3)] ${className}`}
      >
        <Button
          text={text}
          className="border-none text-2xl font-bold uppercase w-full h-full"
        />
      </div>
    </div>
  );
};

export default QueueList;
