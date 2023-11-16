// KeyboardMulti.tsx
import React from "react";

export const setCursorPosition = (
  position: number,
  activeInput: HTMLInputElement | null
) => {
  if (activeInput) {
    setTimeout(() => {
      activeInput.selectionStart = position;
      activeInput.selectionEnd = position;
      activeInput.focus();
    }, 0);
  }
};

export const handleKeyClick = (
  key: string,
  activeInputRef: React.RefObject<HTMLInputElement | null>,
  inputValue: string[],
  setInputValue: React.Dispatch<React.SetStateAction<string[]>>,
  inputRefs: React.RefObject<HTMLInputElement | null>[],
  setActiveKeyboard: React.Dispatch<React.SetStateAction<string>>
) => {
  const activeInput = activeInputRef.current as HTMLInputElement | null;

  if (activeInput) {
    const cursorPosition = activeInput?.selectionStart || 0;
    const inputIndex = inputValue.findIndex(
      (_, index) => inputRefs[index].current === activeInput
    );

    if (key === "CLEAR") {
      inputValue[inputIndex] = "";
    } else if (key === "?123") {
      setActiveKeyboard((prevKeyboard) =>
        prevKeyboard === "alpha" ? "symbol" : "alpha"
      );
    } else if (key === "ABC") {
      setActiveKeyboard((prevKeyboard) =>
        prevKeyboard === "alpha" ? "symbol" : "alpha"
      );
    } else if (key === " ⓑ") {
      if (cursorPosition > 0) {
        inputValue[inputIndex] =
          inputValue[inputIndex].slice(0, cursorPosition - 1) +
          inputValue[inputIndex].slice(cursorPosition);
        setCursorPosition(cursorPosition - 1, activeInput);
      }
    } else if (key === "SPACEBAR") {
      if (cursorPosition >= 0) {
        inputValue[inputIndex] =
          inputValue[inputIndex].slice(0, cursorPosition) +
          " " +
          inputValue[inputIndex].slice(cursorPosition);
        setCursorPosition(cursorPosition + 1, activeInput);
      } else {
        inputValue[inputIndex] =
          key + inputValue[inputIndex].slice(cursorPosition);
        setCursorPosition(cursorPosition + 1, activeInput);
      }
    } else {
      inputValue[inputIndex] =
        inputValue[inputIndex].slice(0, cursorPosition) +
        key +
        inputValue[inputIndex].slice(cursorPosition);
      setCursorPosition(cursorPosition + 1, activeInput);
    }
    setInputValue([...inputValue]);
  }
};
