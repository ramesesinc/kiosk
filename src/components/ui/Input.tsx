import { useKeyboardContext } from "@/components/keyboard/KeyboardContext";
import React, { useRef } from "react";

interface InputProps {
  label?: string;
  className?: string;
  placeholder?: string;
  labelLayout?: string;
  translationUp?: string;
  translationDown?: string;
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
    | "search"
    | "disabled";
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  labelLayout,
  translationDown,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setActiveInput } = useKeyboardContext();

  const focusHandler = () => {
    if (inputRef.current) {
      setActiveInput(inputRef);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange && onChange(value); // Call onChange prop if provided
  };

  return (
    <div className="relative">
      <label
        className={`absolute left-3 -top-10 px-[5px] transition-transform ${labelLayout} ${
          translationDown ? `translate-y-2 z-[-1] ${translationDown}` : ""
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-transparent px-4 py-2 focus:outline-none rounded ${
          className ? className : ""
        }`}
        ref={inputRef}
        onFocus={focusHandler}
        onChange={handleChange}
        value={value}
        disabled={type === "disabled"}
      />
    </div>
  );
};

export default Input;
