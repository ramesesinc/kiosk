import React, { ReactNode } from "react";

interface BplsProps {
  children?: ReactNode;
}

const BplsLayout: React.FC<BplsProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      {children}
    </div>
  );
};

export default BplsLayout;
