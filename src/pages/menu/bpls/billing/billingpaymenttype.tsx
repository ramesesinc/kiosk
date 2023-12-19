import PaymentType from "@/components/transactions/payment/PaymentType";
import Title from "@/components/ui/Title";
import React from "react";

const PaymentTypePage = () => {
  // const timeLimit = 120000;
  // useTimer(timeLimit);

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="mt-[200px] gap-10 flex flex-col text-center">
        <Title text={"choose preferred payment type"} />
        <div className="flex gap-10">
          <PaymentType />
        </div>
      </div>
    </div>
  );
};

export default PaymentTypePage;
