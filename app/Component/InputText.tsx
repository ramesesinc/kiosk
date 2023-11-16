import React from "react";

interface BusinessFormProps {
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  value: string;
  name: string;
  placeholder: string;
  label: string;
  size: number;
  disabled?: boolean;
  onclick: React.MouseEventHandler<HTMLInputElement>;
}

const InputText: React.FC<BusinessFormProps> = ({
  label,
  placeholder,
  size,
  inputRef,
  value,
  onclick,
  disabled,
}) => {
  
  return (
    <div className="flex justify-center gap-5 text-[30px] p-2">
      <div className="flex flex-col">
        <label htmlFor="">{label}</label>
        <input
          ref={inputRef}
          value={value}
          size={size}
          name=""
          placeholder={placeholder}
          className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
          onClick={onclick}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputText;
