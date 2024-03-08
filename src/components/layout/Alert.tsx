import Button from "@/components/ui/Button";
import React from "react";
import Images from "../ui/Images";

interface AlertProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps & { errorMessage: string }> = ({
  isOpen,
  onClose,
  errorMessage,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#00000080] flex flex-col justify-center items-center z-[1]`}
    >
      <div className="w-[60%] flex flex-col items-center gap-2 bg-white p-6 rounded-2xl z-10">
        <div className="flex flex-col gap-20 text-center justify-center items-center m-8 uppercase">
          {errorMessage && <div className="mb-4 text-4xl">{errorMessage}</div>}
          <div className="flex justify-center items-center">
            <Images img="/icons/alert.jpg" alt={""} classname="w-[200px]" />
          </div>
          <Button buttonText={"OK"} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Alert;
