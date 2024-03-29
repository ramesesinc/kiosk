import PaymentType from "@/components/transactions/payment/PaymentType";
import Title from "@/components/ui/Title";
import React from "react";
import Button from "@/components/ui/Button";
import useTimer from "@/hooks/useTimer";
import router from "next/router";

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
      <div className="text-[30px] gap-20 flex justify-center items-center pt-10 w-full">
        <Button
          text={"Back"}
          onClick={() => router.push("/menu/business/paymentInfo")}
        />

        <Button
          text={"Next"}
          onClick={() => router.push("")}
          className="bg-light-blue text-white"
          display="invisible"
        />
      </div>
    </div>
  );
};

export default PaymentTypePage;
