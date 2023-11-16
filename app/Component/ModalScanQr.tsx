import React, { ReactNode } from "react";
import styles from "../Modal.module.css";
import NextCancelBtn from "./NextCancelBtn";
4;
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  span: string;
  link: string;
}

const ModalPayOption: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  heading,
  span,
  link,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} z-[1] text-[30px]`}>
      <div className="w-[80%] relative">
        <div className="flex flex-col items-center justify-around bg-white p-8 rounded-2xl z-10 h-[1100px]">
          <h1 className="uppercase font-bold flex flex-col items-center gap-5 text-[40px]">
            {heading}
            <span className="text-[22px] font-semibold">{span}</span>
          </h1>

          <div className=" absolute bottom-[400px] left-[220px]">
            <FaArrowDown size={70} className=" animate-bounce text-green-500" />
          </div>

          <Image
            src={link}
            height={100}
            width={400}
            quality={100}
            alt={"GUild"}
          ></Image>
          <div className="flex gap-5">
            <button className=" rounded-2xl " onClick={onClose}>
              <NextCancelBtn link={""} text={"Close"} bgcolor={""} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPayOption;
