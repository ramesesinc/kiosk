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
    <div className="text-[25px] flex flex-col gap-10">
      <h1 className="text-[35px] text-green-500">Billing Information</h1>
      <table className="w-full">
        <tbody className="text-left">
          <tr>
            <th>Application No.</th>
            <td>{billingInformation.applicationNo}</td>
          </tr>
          <tr>
            <th>Application Type</th>
            <td>{billingInformation.applicationType}</td>
          </tr>
          <tr>
            <th>Dated Filed</th>
            <td>{billingInformation.datedFiled}</td>
          </tr>
          <tr>
            <th>BIN</th>
            <td>{billingInformation.bin}</td>
          </tr>
          <tr>
            <th>Trade Name</th>
            <td>{billingInformation.tradeName}</td>
          </tr>
          <tr>
            <th>Owner Name</th>
            <td>{billingInformation.ownerName}</td>
          </tr>
          <tr>
            <th>Business Address</th>
            <td>{billingInformation.businessAddress}</td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          openModal();
        }}
        className="border-2 px-4 py-2 border-gray-400 rounded-xl w-[30%]"
      >
        Pay Option
      </button>
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
      <ModalPayOption isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BillingInformation;
