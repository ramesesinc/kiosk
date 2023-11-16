import React, { ReactNode } from "react";
import styles from "../Modal.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalGcash: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} z-[1]`}>
      <div className="relative">
        <button
          className="text-red-500 rounded-2xl absolute top-[15px] right-[15px]"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={50} />
        </button>
        <form className="flex flex-col items-center gap-5 bg-white p-8 rounded-2xl z-10">
          <div className="">
            <Image
              src={"/gcash-qr.png"}
              alt={""}
              height={100}
              width={300}
              quality={100}
            ></Image>
          </div>
          <h1 className="text-red-500 text-[25px] text-center">
            Step on how to pay using Gacash:
          </h1>
          <ul className="text-[30px]">
            <li>1. Open your Gcash and scan the Code.</li>
            <li>2. Pay the exact amount</li>
            <li>3. Wait for the confirmation</li>
          </ul>
          <Link href={"/menu"}>
            <button className="flex items-center justify-center bg-[#335F96] w-[200px] h-[70px] text-white rounded-2xl">
              Confirm
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ModalGcash;
