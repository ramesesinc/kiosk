import React from "react";

interface InputProps {
  label?: string;
  className?: string;
  placeholder: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  placeholder,
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
          required={required}
        />
      </label>
    </div>
  );
};

export default Input;
