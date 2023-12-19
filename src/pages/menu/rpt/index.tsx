import Button from "@/components/ui/Button";
import { FaArrowDown } from "react-icons/fa6";
import React, { useState } from "react";
import BillingNumber from "@/components/transactions/bpls/BplsInitial";
import Modal from "@/components/ui/Modal";
import useTimer from "@/hooks/useTimer";
import Keyboard from "@/components/keyboard/Keyboard";
import router from "next/router";

const Index = () => {
  const timeLimit = 120000;
  useTimer(timeLimit);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    textButton: "Confirm",
    onClick: () => setIsModalOpen(false),
    showClose: "invisible",
    image: "/icons/alert.jpg",
    imageHeight: 200,
    imageWidth: 200,
    paragraph1: "",
  });

  return (
    <div className="w-full text-[30px] flex flex-col justify-between items-center">
      <BillingNumber
        title={"Scan QR here..."}
        image={"/images/kiosk.png"}
        placeholder={"Enter Tax"}
      />

      <div className=" w-full flex flex-col justify-between gap-8">
        <Keyboard />
        <div className="gap-20 flex justify-center items-center w-full">
          <Button text={"Back"} onClick={() => router.push("/menu")} />
          <Button
            text={"Next"}
            className="bg-light-blue text-white"
            onClick={() => router.push("/menu/property/billingInfo")}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} {...modalContent} />
    </div>
  );
};

export default Index;
