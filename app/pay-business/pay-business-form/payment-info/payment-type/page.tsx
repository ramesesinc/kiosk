/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import PaymentType from "@/app/Component/PaymentType";
import LabelStepper from "@/app/Component/LabelStepper";

import NextCancelBtn from "@/app/Component/NextCancelBtn";
import useTimer from "@/app/functions/Timer";

const Page: React.FC = () => {
  const timeLimit = 120000;
  useTimer(timeLimit);
  return (
    <>
      {" "}
      <img src="/Qr.png" alt="" className="hidden" />
      <div className="flex  flex-col justify-center items-center">
        <LabelStepper stepNum={3} title={"Enter Bin"} />
      </div>
      <div className="flex  text-[40px] items-center flex-col mt-[50px]">
        <h1 className="font-bold uppercase pb-[80px]">
          Choose Preferred payment type
        </h1>
        <div className="flex gap-20 pt-5">
          <PaymentType />
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn
            link={"/pay-business/pay-business-form/payment-info/"}
            text={"Back"}
            bgcolor={"#fff"}
          />
          <div className="text-white invisible">
            <NextCancelBtn link={"#"} text={"Next"} bgcolor={"#005893"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
