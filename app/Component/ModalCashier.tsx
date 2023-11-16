/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "../Modal.module.css";
import Image from "next/image";
import { TiArrowDownThick } from "react-icons/ti";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import PrintableContent1 from "./PrintableContent1";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          <div className="hidden">
            <PrintableContent1 ref={componentRef} />
          </div>
          <Image
            src={"/Qr.png"}
            alt={""}
            height={100}
            width={150}
            quality={100}
            className=""
          />
          <h1 className="text-[35px] uppercase font-semibold">Queue No.</h1>
          <p className="text-[70px] font-bold ">001</p>

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
