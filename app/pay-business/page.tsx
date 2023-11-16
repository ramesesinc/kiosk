"use client";
import React from "react";
import LabelStepper from "../Component/LabelStepper";
import InputNumber from "../Component/InputNumber";
import ScanQrGuide from "../Component/ScanQrGuide";
import useTimer from "../functions/Timer";
import { FaArrowDown } from "react-icons/fa";

export default function Page() {
  const timeLimit = 120000;
  useTimer(timeLimit);
  return (
    <div className="">
      <LabelStepper stepNum={0} title={"Enter Bin"} />
      <div className="flex flex-col justify-center w-full pt-[40px]">
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
        />
        <ScanQrGuide
          heading1={"or"}
          heading2={"Scan QR here"}
          kioskImg={"/guide.png"}
          iconImg={
            <FaArrowDown size={30} className=" animate-bounce text-green-500" />
          }
        />
      </div>
    </div>
  );
}
