import { useState } from "react";

type SelectOptions = {
  label: string;
  value: any;
};

type SelectProps = {
  options: SelectOptions[];
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function clearOptions() {
    onChange(undefined);
  }

  function selectOption(option: SelectOptions) {
    onChange(option);
  }
  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className="container flex justify-between text-[50px]"
    >
      <span className="value">{value?.label}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className="clear-btn"
      >
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={`${"options"} ${isOpen ? "show" : ""}`}>
        {options.map((option) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            key={option.label}
            className={`option`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
