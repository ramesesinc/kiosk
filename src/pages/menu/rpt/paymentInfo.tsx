import React, { useState } from "react";
import PaymentInformation from "@/components/transactions/payment/PaymentInformation";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import useTimer from "@/hooks/useTimer";
import Keyboard from "@/components/keyboard/Keyboard";
import router from "next/router";

const PaymentInfo = () => {
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
    <div className="w-full flex flex-col justify-between items-center">
      <PaymentInformation />
      <div className="w-full flex flex-col justify-between gap-8">
        <Keyboard />
        <div className="gap-20 flex justify-center items-center w-full">
          <Button
            text={"Back"}
            onClick={() => router.push("/menu/property/billingInfo")}
          />
          <Button
            text={"Next"}
            className="bg-light-blue text-white"
            onClick={() => router.push("/menu/property/paymentType")}
            href=""
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} {...modalContent} />
    </div>
  );
};

export default PaymentInfo;
