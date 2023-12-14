import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";

interface ActionBarProps {
  children?: ReactNode;
}
const ActionBar: React.FC<ActionBarProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center gap-32 items-center">
      {children}
    </div>
  );
};

export default ActionBar;
