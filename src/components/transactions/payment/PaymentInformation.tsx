import React, { ChangeEvent, useState } from "react";
import Title from "../../ui/Title";
import Subtitle from "../../ui/Subtitle";
import Input from "../../ui/Input";
import Numbers from "../../ui/Numbers";

const PaymentInformation = () => {

  return (
    <div className="">
      <div className="flex flex-col justify-center text-center items-center mx-12">
        <Title text={"Confirm Transaction"} className="text-[28px]"/>
        <Subtitle
          text={
            "Please Confirm and Fill up name and address of the payer for your electronic official receipt and click Continue to proceed for payment"
          }
          className="text-[20px] leading-normal p-5"
        />
      </div>
      <div className="flex flex-col gap-8 text-[28px]">
        <Input
          label="Paid by Name"
          placeholder={"Your Name"}
          className="w-full text-start border-b-2 border-black rounded-none"
          type="text"
        />
        <Input
          label="Paid by Address"
          placeholder={"Your Address"}
          className="w-full text-start border-b-2 border-black rounded-none"
          type="text"
        />
      </div>
      <div className="m-2 text-center flex justify-center items-center flex-col gap-4 pt-10">
        <Subtitle text={"Payment Details"} />
        <div className="border border-black font-bold w-[70%] p-8">
          <Numbers text="Php:" number={921.09} />
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
