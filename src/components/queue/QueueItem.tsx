import React from "react";
import Button from "../ui/Button";

interface QueueItemProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const QueueItem: React.FC<QueueItemProps> = ({ title, className, onClick }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`w-full h-24 flex items-center justify-center  border border-[#335F96] rounded-2xl ${className}`}
      >
        <Button
          text={title}
          className="border-none text-2xl font-bold uppercase w-full h-full !px-5"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default QueueItem;
