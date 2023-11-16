"use client";

import React from "react";
import useTimer from "@/app/functions/Timer";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import PaymentForm from "@/app/Component/PaymentForm";

export default function Page() {
  const timeLimit = 120000;
  useTimer(timeLimit);

  return (
    <div className="text-[25px]">
      <LabelStepper stepNum={2} title={"Enter Tax"} />
      <PaymentForm />
      <div className="absolute bottom-0 w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn
            link={"/pay-property/pay-property-form"}
            text={"Back"}
            bgcolor={"#fff"}
          />
          <div className="text-white">
            <NextCancelBtn
              link={"/pay-property/pay-property-form/payment-info/payment-type"}
              text={"Next"}
              bgcolor={"#005893"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
