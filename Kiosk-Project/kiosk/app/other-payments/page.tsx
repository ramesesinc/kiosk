"use client";

import React from "react";
import NextCancelBtn from "../Component/NextCancelBtn";
import otherPaymentsConfig from "../configJSON/otherPaymentsConfig.json";
import CategoryOtherPayments from "../Component/CategoryOtherPayments";
import useTimer from "../functions/Timer";

export default function Page() {
  const timeLimit = 10000;
  useTimer(timeLimit);

  const OtherPaymentsComponents = otherPaymentsConfig.otherPaymentsConfigs.map(
    (config, index) => (
      <CategoryOtherPayments
        key={index}
        text={config.text}
        link={config.link}
      />
    )
  );

  return (
    <div className="mt-[100px]">
      <main className=" flex flex-col justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-10 text-[35px]">
          {OtherPaymentsComponents}

          <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
            <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
            <div className="text-white">
              <NextCancelBtn
                link={"/other-payments/other-payments-2"}
                text={"Next"}
                bgcolor={"#005893"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
