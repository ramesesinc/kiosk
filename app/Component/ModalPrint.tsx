/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useEffect, useRef } from "react";
import styles from "../Modal.module.css";
import Image from "next/image";
import { TiArrowDownThick } from "react-icons/ti";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import PrintableContent from "./QueueContentPrint";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, heading, text }) => {
  if (!isOpen) return null;
  const componentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={`${styles.modalOverlay} z-[1]`}>
      <div className="relative w-[66%]">
        <button
          className="text-red-500 rounded-2xl absolute top-[15px] right-[15px]"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={50} />
        </button>

        <form className="flex flex-col justify-center items-center gap-2 bg-white rounded-2xl p-5 ">
          <div className="invisible">
            <PrintableContent ref={componentRef} heading={heading} number={1} />
          </div>
          <h1 className="text-[35px] uppercase font-semibold">{heading}</h1>
          <p className="text-[70px] font-bold pb-[70px]">{text}</p>

          <Image
            src={"/print.png"}
            alt={""}
            height={100}
            width={150}
            quality={100}
            className="pb-[70px]"
          />
          <TiArrowDownThick
            size={50}
            className="absolute bottom-20 animate-bounce"
          />
          <Link href={"/menu"}>
            <button
              onClick={handlePrint}
              className="bg-[#335F96] px-20 rounded-2xl text-white font-semibold"
            >
              Print
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Modal;
