import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-[400px] h-[100px] items-center px-4 py-2 text-[30px] font-medium text-gray-700 bg-white border-b-4 border-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-sky-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || "Quarter to Bill"}
          <AiFillCaretDown />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-lg w-full text-[30px]">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
