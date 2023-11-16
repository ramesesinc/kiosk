import React, { useState } from "react";
import Image from "next/image";
import ModalGcash from "./ModalGcash";
import Modal from "./ModalCashier";

const Gcash = () => {
  const [isModalOpenGcash, setIsModalOpenGcash] = useState(false);

  const openModalGcash = () => {
    setIsModalOpenGcash(true);
  };

  const closeModalGcash = () => {
    setIsModalOpenGcash(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-20">
      <div className="relative">
        {/* MODAL GCASH */}
        <button
          onClick={openModalGcash}
          className="bg-white w-[300px] h-[420px] flex items-center text-center justify-between rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] flex-col border border-black"
        >
          <Image
            src="/gcash.png"
            alt="Cebu Logo"
            width={250}
            height={100}
            quality={100}
          />
          <h1 className="uppercase">Pay Here</h1>
          <h1 className="bg-black w-full text-white uppercase rounded-b-2xl">
            Gcash
          </h1>
          <div className="bg-black w-[250px] h-[2px] absolute top-[220px]"></div>
        </button>

        <ModalGcash isOpen={isModalOpenGcash} onClose={closeModalGcash} />
      </div>

      <div className="relative">
        {/* MODAL CASHIER */}
        <button
          onClick={() => {
            openModal();
          }}
          className="bg-white w-[300px] h-[420px] flex items-center text-center justify-between rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] flex-col border border-black"
        >
          <Image
            src="/cashier.png"
            alt="Cebu Logo"
            width={250}
            height={100}
            quality={100}
          />
          <h1 className="uppercase">Pay counter</h1>
          <h1 className="bg-black w-full text-white uppercase rounded-b-2xl">
            Cashier
          </h1>
          <div className="bg-black w-[250px] h-[2px] absolute top-[220px]"></div>
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Gcash;
