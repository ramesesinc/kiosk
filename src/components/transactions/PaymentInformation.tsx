import React from "react";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Numbers from "../ui/Numbers";

const PaymentInformation = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col justify-center text-center items-center gap-10 mx-12">
          <Title text={"Confirm Transaction"} />
          <Subtitle
            text={
              "Please Confirm and Fill up name and address of the payer for your electronic official receipt and click Continue to proceed for payment"
            }
            className="text-[35px] leading-normal p-5"
          />
        </div>
        <div className="mx-20">
          <Input
            label="Paid by Name"
            placeholder={"Your Name"}
            className="w-full text-start border-b-2 border-black rounded-none"
          />
          <Input
            label="Paid by Address"
            placeholder={"Your Address"}
            className="w-full text-start border-b-2 border-black rounded-none"
          />
        </div>
        <div className="m-8 text-center flex justify-center items-center flex-col gap-10 pt-10">
          <Subtitle text={"Payment Details"} />
          <div className="border border-black font-bold w-[70%] p-8">
            <Numbers number={921.09} text="Php:" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
