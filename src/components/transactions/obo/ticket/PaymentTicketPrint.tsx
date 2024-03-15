import Title from "@/components/ui/Title";
import { ticketInfo } from "@/stores/lgu-info";
import Image from "next/image";
import React, { forwardRef, ForwardRefRenderFunction, Ref } from "react";

interface PaymentPrintTicketProps {
  QRCode?: React.ReactNode;
  appDate?: string | undefined;
  addr?: string | undefined;
  total?: number | React.ReactNode;
  appNo?: string | undefined;
  payerName: string | undefined;
  seriesno?: string;
}
const headers = ["payer", "address", "particulars", "total", "ocsp no"];

const PaymentPrintTicket: ForwardRefRenderFunction<
  HTMLDivElement,
  PaymentPrintTicketProps
> = (
  { QRCode, addr, total, appNo, payerName, seriesno },
  ref: Ref<HTMLDivElement>
) => (
  <div ref={ref}>
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4">
        {ticketInfo.map((item, index) => (
          <div className="flex gap-x-4">
            <Image
              src={item.logo.src}
              alt={""}
              width={50}
              height={50}
              loading="eager"
              style={{ width: 50, height: 50 }}
              priority
              unoptimized
            />
            <div className="flex flex-col justify-center items-center">
              <Title
                text={item.header.title}
                classname="uppercase text-[12px] leading-4"
              />
              <Title
                text={item.subheader.title}
                classname="uppercase text-[12px] leading-4"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-x-4">
        <div className="">{QRCode}</div>
        <div className="w-[2px] bg-black"></div>
        <div className="flex flex-col justify-center items-center">
          <Title
            text={"Queue No"}
            classname="uppercase text-[18px] leading-5"
          />
          <Title text={seriesno} classname="uppercase text-[18px] leading-5" />
        </div>
      </div>
      <div className="flex flex-col">
        <Title
          text="present this receipt to the collector"
          classname="uppercase"
          textSize="text-[12px]"
        />
        <table>
          <tbody>
            {headers.map((label, index) => (
              <tr key={index} className="text-start text-[12px]">
                <td className="capitalize w-[90px]">{label}</td>
                <td>
                  {label === "payer" && payerName}
                  {label === "address" && addr}
                  {label === "particulars" && "OSCP Billing And Payment"}
                  {label === "total" && total}
                  {label === "ocsp no" && appNo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default forwardRef(PaymentPrintTicket);
