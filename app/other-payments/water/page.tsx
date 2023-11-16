import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div>
      <header className="text-[20px]">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>Enter Account No.</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>
      <main className="bgtax-image flex flex-col justify-center w-full ">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/other-payments"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex flex-col justify-center items-center gap-20 text-[50px] my-[300px]">
          <input
            name="firstName"
            placeholder="Account No."
            className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
          />

          <Link href={"/other-payments/water/payment-info"}>
            <button className="w-[500px] h-[100px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
              Confirm
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
