import React from "react";

interface NumberProps {
  number?: number;
  text?: string;
  className?: string;
}

const Numbers: React.FC<NumberProps> = ({ number, className, text }) => {
  return (
    <div>
      <p className={`text-4xl ${className}`}>
        {text} {number !== undefined ? number : ""}
      </p>
    </div>
  );
};

export default Numbers;
