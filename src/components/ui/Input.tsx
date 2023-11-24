import React from "react";

interface InputProps {
  label?: string;
  className?: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label htmlFor="text" title="Text">
        {label}
        <input
          type="text"
          id="text"
          placeholder={placeholder}
          className={`p-4 rounded-2xl flex text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
