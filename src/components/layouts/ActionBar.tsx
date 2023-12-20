import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";

interface ActionBarProps {
  children?: ReactNode;
  backRoute?: (() => void) | string;
  nextRoute?: (() => void) | string; // Update the type of nextRoute
  className?: string;
  hideNextButton?: boolean;
}

const ActionBar: React.FC<ActionBarProps> = ({
  backRoute,
  nextRoute,
  hideNextButton,
  children,
  className,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (backRoute) {
      if (typeof backRoute === "function") {
        // If backRoute is a function, execute it
        backRoute();
      } else {
        // If backRoute is a string, navigate to the specified route
        router.push(backRoute);
      }
    }
  };

  const handleNext = () => {
    if (nextRoute) {
      if (typeof nextRoute === "function") {
        // If nextRoute is a function, execute it
        nextRoute();
      } else {
        // If nextRoute is a string, navigate to the specified route
        router.push(nextRoute);
      }
    }
  };

  return (
    <div className="w-full flex justify-center gap-32 items-center">
      {children}
      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} onClick={handleBack} />
        {!hideNextButton && (
          <Button
            text={"Next"}
            onClick={handleNext}
            className={`bg-light-blue text-white ${className}`}
          />
        )}
      </div>
    </div>
  );
};

export default ActionBar;
