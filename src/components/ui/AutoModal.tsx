// components/Modal.tsx
import React, { useState, ReactNode } from "react";

interface AutoModalProps {
  children?: ReactNode;
  content: ReactNode;
}

const AutoModal: React.FC<AutoModalProps> = ({ children, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>{content}</button>
      {isModalOpen && (
        <div
          className=" fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center "
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-[50px] pt-[120px] rounded-[20px] shadow-[0_0_10px_rgba(0,0,0,0.1)] max-w-[70%] max-h-[60%] w-full h-auto overflow-auto flex items-center justify-center "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-10 right-10">
              <button
                className="bg-none border-none text-[50px] text-[#333]"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="pb-20">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoModal;
