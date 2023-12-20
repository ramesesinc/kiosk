import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Grid from "@/components/ui/Grid";
import Modal from "@/components/ui/Modal";
import Paragraph from "@/components/ui/Paragraph";
import Title from "@/components/ui/Title";
import { useRouter } from "next/router";

interface Item {
  particulars: string;
  amount: number;
  surcharge: number;
  interest: number;
  linetotal: number;
}

const BillingInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const router = useRouter();
  const { binData } = router.query;

  const options = ["1", "2", "3", "4"];
  const parsedBinData = binData ? JSON.parse(binData as string) : null;
  const totalLineTotal = parsedBinData
    ? parsedBinData.items.reduce(
        (total: number, item: Item) => total + item.linetotal,
        0
      )
    : 0;

  return (
    <div className="text-2xl flex flex-col gap-20 w-full">
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
          {parsedBinData && (
            <Grid columns="grid-rows-7 gap-8 font-bold w-full">
              <Paragraph text={parsedBinData.appno} />
              <Paragraph text={parsedBinData.apptype} />
              <Paragraph text={parsedBinData.dtfiled} />
              <Paragraph text={parsedBinData.bin} />
              <Paragraph text={parsedBinData.tradename} />
              <Paragraph text={parsedBinData.ownername} />
              <Paragraph text={parsedBinData.businessaddress} />
            </Grid>
          )}
        </div>
        <div>
          <Button text={"Pay Option"} className="p-5" onClick={openModal} />
        </div>
        <div className="w-full text-4xl font-semibold">
          {parsedBinData && (
            <Grid columns="grid-cols-5 gap-6">
              {["Particulars", "Amount", "Surcharge", "Interest", "Total"].map(
                (label, index) => (
                  <Paragraph
                    key={index}
                    text={label}
                    className="w-48 text-left"
                  />
                )
              )}

              {parsedBinData.items &&
                parsedBinData.items.map((item: Item, index: number) => (
                  <React.Fragment key={index}>
                    <Paragraph
                      text={item.particulars}
                      className="w-48 text-left"
                    />
                    <Paragraph
                      text={
                        item.amount !== undefined ? item.amount.toString() : ""
                      }
                      className="w-48 text-left"
                    />
                    <Paragraph
                      text={
                        item.surcharge !== undefined
                          ? item.surcharge.toString()
                          : ""
                      }
                      className="w-48 text-left"
                    />
                    <Paragraph
                      text={
                        item.interest !== undefined
                          ? item.interest.toString()
                          : ""
                      }
                      className="w-48 text-left"
                    />
                    <Paragraph
                      text={
                        item.linetotal !== undefined
                          ? item.linetotal.toString()
                          : ""
                      }
                      className="w-48 text-left"
                    />
                  </React.Fragment>
                ))}
            </Grid>
          )}
          <div className="mt-8">
            <div className="bg-black h-[2px] w-full "></div>
            <div className="flex mt-8 justify-end m-8">
              <h1 className="font-bold w-64">Bill Amount :</h1>
              <p>{totalLineTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} textButton={"confirm"}>
        <Title text={"Pay Options"} className="text-[22px]" />
        <Dropdown options={options} />
      </Modal>
    </div>
  );
};

export default BillingInfo;
