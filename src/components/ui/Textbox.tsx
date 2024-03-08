import React, { ChangeEvent, forwardRef } from "react";
import { useKeyboardContext } from "../keyboard/KeyboardContext";

interface TextBoxProps {
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  textSize?: string;
  buttonwidth?: string;
  buttonheight?: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "tel"
    | "time"
    | "file"
    | "checkbox"
    | "search";
  onChange?: (value: string) => void;
}

const TextBox: React.ForwardRefRenderFunction<
  HTMLInputElement,
  TextBoxProps
> = (
  {
    label,
    className,
    placeholder,
    type = "text",
    value,
    onChange,
    textSize,
    buttonwidth,
    buttonheight,
  },
  ref
) => {
  const context = useKeyboardContext();

  function focusHandler() {
    if (ref && "current" in ref && ref.current) {
      context.setActiveInput(ref);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChange) {
      onChange(value); // Call the provided onChange prop if available
    }
  };

  return (
    <div>
      <label htmlFor={type} title={type}></label>
      {label}
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        className={`p-4 rounded-2xl flex text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-[600px] h-[100px] text-5xl ${buttonheight} ${buttonwidth} ${textSize} ${className}`}
        ref={ref}
        onFocus={focusHandler}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default forwardRef(TextBox);
