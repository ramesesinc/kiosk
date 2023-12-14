import React, { ReactNode } from "react";

interface QueueLayoutProps {
  children?: ReactNode;
}

const QueueLayout: React.FC<QueueLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      {children}
    </div>
  );
};

export default QueueLayout;
