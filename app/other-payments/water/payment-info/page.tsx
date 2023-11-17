import ConfirmCancelBtn from "@/app/Component/NextCancelBtn";
import PaymentForm from "@/app/Component/PaymentForm";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
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

      <Link
        className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
        href={"/other-payments/water"}
      >
        <MdKeyboardBackspace size={40} className="text-[#335F96]" />
        <p>Back</p>
      </Link>
      <PaymentForm label={"Paid By"} placeholder={"Type Here"} size={38} />
      <PaymentForm
        label={"Payer Address"}
        placeholder={"Type Here"}
        size={38}
      />
      <PaymentForm label={"Particulars"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center">
        <PaymentForm
          label={"Particulars"}
          placeholder={"Type Here"}
          size={15}
        />

        <PaymentForm label={"Amount"} placeholder={"Type Here"} size={15} />
      </div>

      <div className="flex justify-center gap-20">
        <ConfirmCancelBtn
          text={"Cancel"}
          link={"/menu"}
          bgcolor={"#d3010cee"}
        />
        <ConfirmCancelBtn
          text={"Confirm"}
          link={"/other-payments/water/payment-info/payment-type"}
          bgcolor={"#335F96"}
        />
      </div>
    </div>
  );
}
