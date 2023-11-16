import CategoryOtherPayments from "@/app/Component/CategoryOtherPayments";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import React from "react";

export default function page() {
  const paymentTypesConfig = [
    { link: "/other-payments/cedula", text: "Police Clearance" },
    { link: "", text: "Health Permit" },
    { link: "", text: "Ordinance Violations" },
    { link: "", text: "Work Permit" },
  ];

  const paymentTypesComponents = paymentTypesConfig.map((config, index) => (
    <CategoryOtherPayments key={index} link={config.link} text={config.text} />
  ));

  return (
    <div className="mt-[100px]">
      <main className="flex flex-col justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-10 text-[35px]">
          {paymentTypesComponents[0]}
          {paymentTypesComponents[1]}
          {paymentTypesComponents[2]}
          {paymentTypesComponents[3]}
          <div className="flex gap-24 text-[30px] pt-10 absolute bottom-8 left-[139px]">
            <NextCancelBtn link="/other-payments" text="Back" bgcolor="#fff" />
          </div>
        </div>
      </main>
    </div>
  );
}
