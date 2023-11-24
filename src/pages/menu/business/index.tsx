import Button from "@/components/ui/Button";
import { FaArrowDown } from "react-icons/fa6";
import React, { useState } from "react";
import BillingNumber from "@/components/transactions/billing/BillingNumber";
import Modal from "@/components/ui/Modal";

const Index = () => {
  const [inputValue, setInputValue] = useState<string>("");
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

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
  };

  const handleInputChecker = () => {
    if (inputValue.trim() === "") {
      setModalContent({
        ...modalContent,
        paragraph1: "Please enter BIN number",
      });
      setIsModalOpen(true);
    } else {
      window.location.href = `/menu/business/billingInfo`
    }
  };

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <BillingNumber
        placeholder={"type here."}
        paragraph={"OR"}
        title={"Scan QR here..."}
        image={"/images/guide.png"}
        icon={<FaArrowDown />}
        onInputChange={handleInputValueChange}
      />
      

      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} href="/menu" />
        <Button
          text={"Next"}
          className="bg-light-blue text-white"
          onClick={handleInputChecker}
        />
      </div>

      <Modal isOpen={isModalOpen} {...modalContent} />
    </div>
  );
};

export default Index;
