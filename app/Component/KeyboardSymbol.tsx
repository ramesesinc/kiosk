/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

const KeyboardSymbol = ({
  handleKeyClick,
}: {
  handleKeyClick: (key: string) => void;
}) => {
  return (
    <div>
      {/* flex justify-center items-center h-screen */}
      <div className="flex justify-center items-centers">
        {/* Number container */}
        <div className="">
          {["@"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["#"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["$"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["_"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["&"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["-"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["+"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["%"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["Ñ"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {["/"].map((key) => (
            <button
              className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
              key={key}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
          {/* Q-P */}
          <div className="flex">
            {["("].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[")"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["*"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["'"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[":"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[";"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["!"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["?"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["~"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["`"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>
          {/* A-P */}
          <div className="flex">
            {["{"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["}"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["["].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["]"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["^"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["="].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["+"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["<"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[">"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[" ⓑ"].map((key) => (
              <div
                className="bg-white text-white border border-gray-400 rounded-lg font-bold text-xs shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                onClick={() => handleKeyClick(key)}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    className="h-[30px] mt-[18px]"
                    src="/backspace.png"
                    alt=""
                  />
                  {key}
                </div>
              </div>
            ))}
          </div>
          {/* Z-M, Clear */}
          <div className="flex">
            {["ABC"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[100px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[","].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["."].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["|"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[""].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[""].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[""].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {[""].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[70px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
            {["CLEAR"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[120px] h-[70px] m-[5px]"
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {["SPACEBAR"].map((key) => (
              <button
                className="bg-white border border-gray-400 rounded-lg font-bold text-2xl shadow-[9px_2px_15px_0px_rgba(0,0,0,0.3)] w-[500px] h-[70px] m-[5px] "
                key={key}
                onClick={() => handleKeyClick(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardSymbol;
