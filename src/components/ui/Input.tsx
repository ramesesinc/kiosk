import React from "react";

interface InputProps {
  label?: string;
  className?: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ label, className, placeholder }) => {
  return (
    <div>
      <label htmlFor="text" title="Text">
        {label}
        <input
          type="text"
          id="text"
          placeholder={placeholder}
          className={`p-4 rounded-2xl border border-gray-400 flex text-center ${className}`}
        />
      </label>
    </div>
  );
};

export default Input;
