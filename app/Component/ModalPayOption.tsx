import React, { ReactNode } from "react";
import styles from "../Modal.module.css";
import NextCancelBtn from "./NextCancelBtn";
import Dropdown from "./Dropdown";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPayOption: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const options = ["1", "2", "3", "4"];

  return (
    <div className={`${styles.modalOverlay} z-[1]`}>
      <div className="relative">
        <div className="flex flex-col items-center justify-between gap-5 bg-white p-8 rounded-2xl z-10 h-[500px]">
          <h1>Pay Options</h1>
          <div>
            <Dropdown options={options} />
          </div>
          <div className="flex gap-5">
            <button className=" rounded-2xl " onClick={onClose}>
              <NextCancelBtn link={""} text={"Cancel"} bgcolor={""} />
            </button>
            <div className="text-white">
              <NextCancelBtn link={""} text={"OK"} bgcolor={"#005893"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPayOption;
