import PaymentInformation from "@/components/transactions/payment/PaymentInformation";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { useState } from "react";

const PaymentInfo = () => {
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
        paragraph1: "Please enter your Full Name",
      });
      setIsModalOpen(true);
    } else {
      window.location.href = `/menu/business/paymentType`;
    }
  };

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <PaymentInformation onInputChange={handleInputValueChange} />
      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} href="/menu/business/billingInfo" />
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

export default PaymentInfo;
