import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Grid from "@/components/ui/Grid";
import Modal from "@/components/ui/Modal";
import Paragraph from "@/components/ui/Paragraph";
import Title from "@/components/ui/Title";

const BillingInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const options = ["1", "2", "3", "4"];

  return (
    <div className="text-2xl flex flex-col gap-20">
      <Title text={"Billing Information"} className="text-green-500" />
      <div className="flex flex-col gap-10">
        <div className="flex justify-start w-full">
          <Grid columns="grid-rows-7 gap-8 font-bold indent-12 w-full">
            {[
              "Application No.",
              "Application Type",
              "Dated Filed",
              "BIN",
              "Trade Name",
              "Owner Name",
              "Business Address",
            ].map((label, index) => (
              <Paragraph key={index} text={label} className="text-start" />
            ))}
          </Grid>
          <Grid columns="grid-rows-7 gap-8 font-bold w-full">
            {[].map((text, index) => (
              <Paragraph key={index} text={text} />
            ))}
          </Grid>
        </div>
        <div>
          <Button text={"Pay Option"} className="p-5" onClick={openModal} />
        </div>
        <div className="w-full text-4xl font-semibold">
          <Grid columns="grid-cols-5">
            {["Particulars", "Amount", "Surcharge", "Interest", "Total"].map(
              (label, index) => (
                <Paragraph
                  key={index}
                  text={label}
                  className="w-48 text-left"
                />
              )
            )}
          </Grid>
          <div className="mt-8">
            <div className="bg-black h-[2px] w-full "></div>
            <div className="flex justify-end gap-36 mt-8">
              <h1 className="font-bold">Bill Amount :</h1>
              <p>1.00</p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} textButton={"confirm"}>
        <Title text={"Pay Options"} className="text-[22px] " />
        <Dropdown options={options} />
      </Modal>
    </div>
  );
};

export default BillingInfo;
