import PaymentType from "@/components/transactions/PaymentType";
import Title from "@/components/ui/Title";
import React from "react";
import paymentTypeData from "../../../stores/paymenttypeitems";
import Button from "@/components/ui/Button";

const paymentType = () => {
  const PaymentTypeComponent = paymentTypeData.map((config, index) => (
    <PaymentType
      key={index}
      title={config.title}
      subtitle={config.subtitle}
      image={config.image}
      onClick={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  ));

  return (
    <div className=" text-[50px] flex flex-col justify-center items-center text-center">
      <div className="mt-[200px] gap-10 flex flex-col">
        <Title text={"choose preferred payment type"} />
        <div className="flex gap-10">{PaymentTypeComponent}</div>
      </div>
      <div className="text-[30px] gap-20 flex justify-center items-center absolute bottom-48 w-full">
        <Button text={"Back"} href="/menu/business/paymentInfo" />
        <div className=" invisible">
          <Button text={"Next"} href="/" className="bg-light-blue text-white" />
        </div>
      </div>
    </div>
  );
};

export default paymentType;
