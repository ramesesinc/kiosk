import Button from "@/components/ui/Button";
import { FaArrowDown } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import BillingNumber from "@/components/transactions/bpls/BplsInitial";
import Keyboard from "@/components/keyboard/Keyboard";
import router from "next/router";
import Modal from "@/components/ui/Modal";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";

interface BinItem {
  appno: string;
  apptype: string;
  dtfiled: string;
  bin: string;
  tradename: string;
  ownername: string;
  businessaddress: string;
}

const Index = () => {
  // const timeLimit = 120000;
  // useTimer(timeLimit);
  const [inputValue, setInputValue] = useState<string>("");
  const [binData, setBinData] = useState<BinItem[] | null>(null);
  const [, setFoundBin] = useState<BinItem | null>(null);
  const [errorType, setErrorType] = useState<string | null>(null);

  const handleInputChange = async (value: string) => {
    setInputValue(value);
  };

  const searchBin = () => {
    if (inputValue.trim() === "") {
      setErrorType("emptyBin");
      openModal();
    } else if (binData) {
      const found = binData.find((binItem) => binItem.bin === inputValue);
      if (!found) {
        setErrorType("notFound");
        openModal();
        setInputValue(inputValue);
        console.log("Not found");
      } else {
        setFoundBin(found || null);
        router.push({
          pathname: "/menu/business/billingInfo",
          query: { binData: JSON.stringify(found) },
        });
      }
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setErrorType(null);
  };

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <BillingNumber
        title={"Scan QR here..."}
        image={"/images/kiosk.png"}
        placeholder={"Enter BIN"}
        onInputChange={handleInputChange}
      />
      <div className="text-[30px] w-full flex flex-col justify-between gap-8">
        <Keyboard />
        <div className="gap-20 flex justify-center items-center w-full">
          <Button text={"Back"} onClick={() => router.push("/menu")} />
          <Button
            text={"Next"}
            className="bg-light-blue text-white"
            onClick={() => {
              searchBin();
            }}
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        showClose=" hidden"
        image="/icons/alert.jpg"
        textButton="OK"
        buttonLayout=" bg-red-500"
      >
        <Title
          text={errorType === "emptyBin" ? "Empty Bin!" : "Not Found!"}
          className="uppercase text-red-500"
        />
        <Subtitle
          text={
            errorType === "emptyBin"
              ? "Please Enter BIN Number"
              : "The BIN number did not exist."
          }
          className="text-center"
        />
      </Modal>
    </div>
  );
};

export default Index;
