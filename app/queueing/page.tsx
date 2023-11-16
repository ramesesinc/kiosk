/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";

import NextCancelBtn from "../Component/NextCancelBtn";
import useTimer from "../functions/Timer";
import QuequeMap from "../Component/QuequeMap";
import queueConfig from "../configJSON/queueConfig.json";

const LandingPage = () => {
  const timeLimit = 100000;
  useTimer(timeLimit);

  return (
    <div className="mt-[100px]">
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="text-[45px] px-28 pt-5 relative grid grid-cols-1 grid-flow-row gap-10">
        {QuequeMap(queueConfig)}
      </div>
      <div className="flex gap-24 text-[30px] pt-10 absolute bottom-8 left-[139px]">
        <NextCancelBtn link="/menu" text="Back" bgcolor="#fff" />
      </div>
    </div>
  );
};

export default LandingPage;
