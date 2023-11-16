import React, { useState } from "react";
import ModalScanQr from "./ModalScanQr";

type GuildProps = {
  heading1: string;
  heading2: string;
  description: string;
};

const ScanQrGuide: React.FC<GuildProps> = ({
  heading1,
  heading2,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="text-[50px] relative flex justify-center items-center pt-[50px]">
        <h1>{heading1}</h1>
        <div className="bg-black w-[200px] h-[1px] absolute top-[90px] left-[180px]"></div>
        <div className="bg-black w-[200px] h-[1px] absolute top-[90px] right-[180px]"></div>
      </div>
      <div className="text-[50px] flex justify-center items-center pt-[30px] font-light">
        <button
          onClick={() => {
            openModal();
          }}
          className="border border-black p-10 font-bold rounded-xl mt-[50px]"
        >
          <h1>{heading2}</h1>
          <p className="text-[20px] uppercase">{description}</p>
        </button>
      </div>
      <ModalScanQr
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Guide"}
        span={" Please scan your QR here!"}
        link={"/guide.png"}
      />
    </div>
  );
};

export default ScanQrGuide;
