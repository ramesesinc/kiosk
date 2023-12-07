import React from "react";
import Button from "../ui/Button";

interface QueueListProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const QueueList: React.FC<QueueListProps> = ({ title, className, onClick }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`w-full h-24 flex items-center justify-center  border border-[#335F96] rounded-xl ${className}`}
      >
        <Button
          text={title}
          className="border-none text-2xl font-bold uppercase w-full h-full"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default QueueList;
