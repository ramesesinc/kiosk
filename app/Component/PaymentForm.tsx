/* eslint-disable react-hooks/exhaustive-deps */
// PaymentForm.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import InputText from "./InputText";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";
import {
  setCursorPosition,
  handleKeyClick,
} from "../functions/KeyboardMultiBox";
import inputConfig from "../configJSON/paymentJson.json";

const PaymentForm = () => {
  const inputRefs: React.RefObject<HTMLInputElement | null>[] = [
    useRef(null),
    useRef(null),
  ];

  const [inputValue, setInputValue] = useState(["", ""]);
  const activeInputRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState("alpha");

  useEffect(() => {
    if (inputRefs[0] && inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, [inputRefs]);

  const inputComponents = inputConfig.paymentJson.map((config, index) => (
    <InputText
      key={index}
      label={config.label}
      placeholder={config.placeholder}
      size={config.size}
      inputRef={inputRefs[index]}
      value={inputValue[index]}
      name=""
      onclick={(e) => {
        activeInputRef.current = inputRefs[index].current;
        const cursorPosition = e.currentTarget.selectionStart || 0;
        setCursorPosition(cursorPosition, activeInputRef.current);
      }}
      disabled={config.disabled}
    />
  ));

  for (let i = 0; i < inputComponents.length; i++) {
    inputComponents[i];
  }

  return (
    <div className="text-[25px]">
      <div className="justify-center">
        {inputComponents.map((component, index) => (
          <React.Fragment key={index}>{component}</React.Fragment>
        ))}
      </div>
      <div className="absolute bottom-40 w-full">
        {activeKeyboard === "alpha" ? (
          <KeyboardAlpha
            handleKeyClick={(key) =>
              handleKeyClick(
                key,
                activeInputRef,
                inputValue,
                setInputValue,
                inputRefs,
                setActiveKeyboard
              )
            }
          />
        ) : (
          <KeyboardSymbol
            handleKeyClick={(key) =>
              handleKeyClick(
                key,
                activeInputRef,
                inputValue,
                setInputValue,
                inputRefs,
                setActiveKeyboard
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
