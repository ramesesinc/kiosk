import React, { useState } from "react";
import ModalPayOption from "./ModalPayOption";
import billingInformationData from "../configJSON/billingInfo.json";

interface BillingInformationProps {}

const BillingInformation: React.FC<BillingInformationProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const billingInformation = billingInformationData.billingInformation;

  return (
    <div className="text-[25px]">
      <h1 className="text-[35px] text-green-500 pb-[50px]">
        Billing Information
      </h1>
      <div className="flex flex-col gap-10">
        <div className=" flex justify-start gap-36">
          <div className="ml-10 font-bold flex flex-col gap-3">
            <p>Application No.</p>
            <p>Application Type</p>
            <p>Dated Filed</p>
            <p>BIN</p>
            <p>Trade Name</p>
            <p>Owner Name</p>
            <p>Business Address</p>
          </div>
          <div className="uppercase flex flex-col gap-3">
            <p>{billingInformation.applicationNo}</p>
            <p>{billingInformation.applicationType}</p>
            <p>{billingInformation.datedFiled}</p>
            <p>{billingInformation.bin}</p>
            <p>{billingInformation.tradeName}</p>
            <p>{billingInformation.ownerName}</p>
            <p>{billingInformation.businessAddress}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              openModal();
            }}
            className="border-2 px-4 py-2 border-gray-400 rounded-xl"
          >
            Pay Option
          </button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold">Particulars</h1>
            <p className="text-right uppercase">-health card</p>
          </div>
          <div className="flex flex-col gap-5 ">
            <h1 className="font-semibold">Amount</h1>
            <p className="text-right uppercase">1.00</p>
          </div>
          <div className="flex flex-col gap-5 ">
            <h1 className="font-semibold">Surcharge</h1>
            <p className="text-right uppercase">0</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold">Interest</h1>
            <p className="text-right uppercase">0</p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold">Total</h1>
            <p className="text-right uppercase">1.00</p>
          </div>
        </div>
        <div className="bg-black h-[2px] w-full "></div>
        <div className="flex justify-end gap-40 ">
          <h1 className="font-bold">Bill Amount :</h1>
          <p>1.00</p>
        </div>
      </div>
      <ModalPayOption isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BillingInformation;
