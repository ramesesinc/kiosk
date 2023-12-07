import React, { useRef, ChangeEvent } from "react";
import { useKeyboardContext } from "../keyboard/KeyboardContext";

interface InputProps {
  label?: string;
  className?: string;
  placeholder: string;
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
    | "search"; // Specify allowed types
  onChange?: (value: string) => void; // New prop for handling input changes
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  placeholder,
  type = "text",
  onChange,
}) => {
  const context = useKeyboardContext();
  const inputRef = useRef<HTMLInputElement>(null);

  function focusHandler() {
    if (inputRef.current) {
      context.setActiveInput(inputRef);
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
        className={`p-4 rounded-2xl flex text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        ref={inputRef}
        onFocus={focusHandler}
        onClick={(e) => e.stopPropagation()}
        onChange={handleChange} // Call handleChange when input changes
      />
    </div>
  );
};

export default Input;
