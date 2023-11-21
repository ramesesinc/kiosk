import React from "react";

interface InputProps {
  text: string;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ text, className, placeholder }) => {
  return (
    <div>
      <label htmlFor="text" title="Text">
        {text}
        <input type="text" id="text" placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
