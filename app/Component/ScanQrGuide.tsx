import React, { ReactNode, useState } from "react";
import ModalScanQr from "./ModalScanQr";
import Image from "next/image";

type GuildProps = {
  heading1: string;
  heading2: string;
  iconImg: ReactNode;
  kioskImg: string;
};

const ScanQrGuide: React.FC<GuildProps> = ({
  heading1,
  heading2,
  iconImg,
  kioskImg,
}) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div>
      <div className="text-[50px] relative flex justify-center items-center pt-[50px] font-bold uppercase">
        <h1>{heading1}</h1>
        <div className="bg-black w-[200px] h-[1px] absolute top-[90px] left-[180px]"></div>
        <div className="bg-black w-[200px] h-[1px] absolute top-[90px] right-[180px]"></div>
      </div>
      <div className=" text-[35px] flex flex-col justify-center items-center pt-[30px] uppercase gap-5">
        {/* <button
          onClick={() => {
            openModal();
          }}
        ></button> */}

        <h1>{heading2}</h1>
        <div className="relative">
          <p className="text-[20px] uppercase absolute right-[35px] top-[190px]">
            {iconImg}
          </p>
        </div>

        <Image
          src={kioskImg}
          alt={"kioskImage"}
          height={100}
          width={200}
          quality={100}
        />
      </div>
      {/* <ModalScanQr
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Guide"}
        span={" Please scan your QR here!"}
        link={"/guide.png"}
      /> */}
    </div>
  );
};

export default ScanQrGuide;
