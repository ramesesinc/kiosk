export const SingleInputBox = (
  key: string,
  inputValue: string,
  inputFieldRef: React.RefObject<HTMLInputElement | null>,
  setActiveKeyboard: React.Dispatch<React.SetStateAction<string>>
): string => {
  let updatedValue = inputValue;

  if (key === "CLEAR") {
    updatedValue = "";
  } else if (key === "?123") {
    setActiveKeyboard((prevKeyboard) =>
      prevKeyboard === "alpha" ? "symbol" : "alpha"
    );
  } else if (key === "ABC") {
    setActiveKeyboard((prevKeyboard) =>
      prevKeyboard === "alpha" ? "symbol" : "alpha"
    );
  } else if (key === " ⓑ") {
    const cursorPosition = inputFieldRef.current?.selectionStart || 0;
    if (cursorPosition > 0) {
      updatedValue =
        inputValue.slice(0, cursorPosition - 1) +
        inputValue.slice(cursorPosition);
      setCursorPosition(inputFieldRef, cursorPosition - 1);
    }
  } else if (key === "SPACEBAR") {
    const cursorPosition = inputFieldRef.current?.selectionStart || 0;
    updatedValue =
      inputValue.slice(0, cursorPosition) +
      " " +
      inputValue.slice(cursorPosition);
    setCursorPosition(inputFieldRef, cursorPosition + 1);
  } else {
    const cursorPosition = inputFieldRef.current?.selectionStart || 0;
    updatedValue =
      inputValue.slice(0, cursorPosition) +
      key +
      inputValue.slice(cursorPosition);
    setCursorPosition(inputFieldRef, cursorPosition + 1);
  }

  return updatedValue;
};

export const setCursorPosition = (
  inputFieldRef: React.RefObject<HTMLInputElement | null>,
  position: number
) => {
  if (inputFieldRef.current) {
    setTimeout(() => {
      if (inputFieldRef.current) {
        inputFieldRef.current.selectionStart = position;
        inputFieldRef.current.selectionEnd = position;
        inputFieldRef.current.focus();
      }
    }, 0);
  }
};
