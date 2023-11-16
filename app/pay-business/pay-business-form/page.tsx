/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import BillingInformation from "@/app/Component/BillingInformation";
import useTimer from "@/app/functions/Timer";

export default function Page() {
  const timeLimit = 120000;
  useTimer(timeLimit);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <LabelStepper stepNum={1} title={"Enter Bin"} />
      </div>
      <div className="m-12">
        <BillingInformation />
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn
            link={"/pay-business"}
            text={"Back"}
            bgcolor={"#fff"}
          />
          <div className="text-white">
            <NextCancelBtn
              link={"/pay-business/pay-business-form/payment-info"}
              text={"Next"}
              bgcolor={"#005893"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
