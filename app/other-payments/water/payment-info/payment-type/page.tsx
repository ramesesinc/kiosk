/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";
import Modal from "@/app/Component/ModalCashier";
import ModalGcash from "@/app/Component/ModalGcash";
import { BsInputCursor } from "react-icons/bs";
import PaymentType from "@/app/Component/PaymentType";

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // modalGcash

  const [isModalOpenGcash, setIsModalOpenGcash] = useState(false);

  const openModalGcash = () => {
    setIsModalOpenGcash(true);
  };

  const closeModalGcash = () => {
    setIsModalOpenGcash(false);
  };

  return (
    <div className="bgtax-image text-[25px]">
      <header className="text-[20px]">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>Enter Account No.</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>

      <Link
        className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
        href={"/other-payments/water/payment-info"}
      >
        <MdKeyboardBackspace size={40} className="text-[#335F96]" />
        <p>Back</p>
      </Link>
      <div className="flex text-[40px] items-center flex-col mt-[150px] mb-[350px]">
        <h1 className="font-bold uppercase">Choose Preferred payment type</h1>
        <div className="flex gap-20 pt-5">
          <PaymentType />
        </div>
      </div>
    </div>
  );
};

export default Page;
