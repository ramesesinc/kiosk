import Button from "@/components/ui/Button";
import { FaArrowDown } from "react-icons/fa6";
import React from "react";
import BillingNumber from "@/components/transactions/BillingNumber";

const index = () => {
  return (
    <div className="">
      <BillingNumber
        placeholder={"type here."}
        paragraph={"OR"}
        title={"Scan QR here..."}
        image={"/images/guide.png"}
        icon={<FaArrowDown />}
      />

      <div className="text-[30px] gap-20 flex justify-center items-center absolute bottom-48 w-full">
        <Button text={"Back"} href="/menu" />

        <Button
          text={"Next"}
          href="/menu/business/billingInfo"
          className="bg-light-blue text-white"
        />
      </div>
    </div>
  );
};

export default index;
