import React, { ReactNode, useRef, useState } from "react";
import ModalPrint from "./ModalPrint";

interface CategoryQueProps {
  text: string;
}

const CategoryQue: React.FC<CategoryQueProps> = ({ text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => {
          openModal();
        }}
        className="w-full"
      >
        <div className=" h-[100px] bg-white rounded-2xl  shadow-[-20px_22px_15px_-10px_rgba(0,0,0,0.3)] border border-[#335F96] flex justify-center items-center">
          <div className="flex items-center flex-col p-5 gap-3">
            <span className="text-[30px] font-semibold text-black">{text}</span>
          </div>
        </div>
      </button>
      <ModalPrint
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Queue No."}
        text={"001"}
      />
    </div>
  );
};

export default CategoryQue;
