/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import InputText from "@/app/Component/InputText";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import React, { useRef, useState } from "react";
import BillingInformation from "@/app/Component/BillingInformation";
import useTimer from "@/app/functions/Timer";

export default function page() {
  const timeLimit = 120000;
  useTimer(timeLimit);

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [inputValues, setInputValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const activeInputRef = useRef(null);

  const setCursorPosition = (position: number) => {
    const activeInput = activeInputRef.current as HTMLInputElement | null;
    if (activeInput) {
      setTimeout(() => {
        activeInput.selectionStart = position;
        activeInput.selectionEnd = position;
        activeInput.focus();
      }, 0);
    }
  };

  const handleKeyClick = (key: string) => {
    const activeInput = activeInputRef.current as HTMLInputElement | null;
    if (activeInput) {
      const cursorPosition = activeInput?.selectionStart || 0;
      const inputIndex = inputRefs.findIndex(
        (ref) => ref.current === activeInput
      );

      if (key === "CLEAR") {
        inputValues[inputIndex] = "";
      } else if (key === "~") {
        if (cursorPosition > 0) {
          inputValues[inputIndex] =
            inputValues[inputIndex].slice(0, cursorPosition - 1) +
            inputValues[inputIndex].slice(cursorPosition);
          setCursorPosition(cursorPosition - 1);
        }
      } else {
        inputValues[inputIndex] =
          inputValues[inputIndex].slice(0, cursorPosition) +
          key +
          inputValues[inputIndex].slice(cursorPosition);
        setCursorPosition(cursorPosition + 1);
      }

      setInputValues([...inputValues]);
    }
  };

  const inputConfig = [
    { label: "ARP/TD No.", placeholder: "Type Here", size: 15 },
    { label: "Property ID No.", placeholder: "Type Here", size: 15 },
    { label: "Owner", placeholder: "Type Here", size: 39 },
    { label: "Address", placeholder: "Type Here", size: 39 },
    { label: "OCT/TCT/CLOA No.", placeholder: "Type Here", size: 15 },
    { label: "Lot No.", placeholder: "Type Here", size: 15 },
    { label: "Municipal Assessor", placeholder: "Type Here", size: 15 },
    { label: "Provincial Assessor", placeholder: "Type Here", size: 15 },
  ];

  const inputComponents = inputConfig.map((config, index) => (
    <InputText
      key={index}
      label={config.label}
      placeholder={config.placeholder}
      size={config.size}
      inputRef={inputRefs[index]}
      value={inputValues[index]}
      name=""
      onclick={(e) => {
        activeInputRef.current = inputRefs[index].current;
        const cursorPosition = e.currentTarget.selectionStart || 0;
        setCursorPosition(cursorPosition);
      }}
    />
  ));

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <LabelStepper stepNum={1} title={"Enter Bin"} />
      </div>
      <div className="m-12">
        <BillingInformation />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn
            link={"/pay-property"}
            text={"Back"}
            bgcolor={"#fff"}
          />
          <div className="text-white">
            <NextCancelBtn
              link={"/pay-property/pay-property-form/payment-info"}
              text={"Next"}
              bgcolor={"#005893"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
