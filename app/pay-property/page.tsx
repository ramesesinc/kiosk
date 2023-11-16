/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import LabelStepper from "../Component/LabelStepper";
import InputNumber from "../Component/InputNumber";
import ScanQrGuide from "../Component/ScanQrGuide";
import useTimer from "../functions/Timer";

export default function page() {
  const timeLimit = 120000;
  useTimer(timeLimit);
  return (
    <div className="">
      <LabelStepper stepNum={0} title={"Enter Tax"} />

      <main className="flex flex-col justify-center w-full pt-[40px]">
        <InputNumber
          name="name"
          placeholder="Enter Tax No."
          link="/pay-property/pay-property-form"
        />
        <ScanQrGuide
          heading1={"OR"}
          heading2={"Scan your QR"}
          description={"Click here"}
        />
      </main>
    </div>
  );
}
