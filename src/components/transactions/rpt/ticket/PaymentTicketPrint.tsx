import Images from "@/components/ui/Images";
import Title from "@/components/ui/Title";
import React, { forwardRef, ForwardRefRenderFunction, Ref } from "react";

interface PaymentPrintTicketProps {
  img?: string | undefined;
  QRCode?: React.ReactNode;
  billDate?: string | undefined;
  addr?: string | undefined;
  total?: number;
  QRData?: string | undefined;
  payerName: string | undefined;
  particular?: string | undefined;
  seriesno?: string;
}
const headers = [
  "trxn date",
  "payer",
  "address",
  "particulars",
  "control no.",
  "total",
];

const PaymentPrintTicket: ForwardRefRenderFunction<
  HTMLDivElement,
  PaymentPrintTicketProps
> = (
  {
    img,
    QRCode,
    billDate,
    addr,
    total,
    QRData,
    payerName,
    particular,
    seriesno,
  },
  ref: Ref<HTMLDivElement>
) => (
  <div ref={ref}>
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex justify-center items-center gap-3">
        <div className="fixed top-0 left-2">
          <Images img={img || ""} width={70} height={70} />
        </div>
        <div className="flex flex-col items-center ml-10 pt-4">
          <Title
            text={"republic of the philipines"}
            classname="uppercase text-[12px] leading-3"
          />
          <Title
            text={"province of bohol"}
            classname="uppercase text-[12px] leading-3"
          />
          <Title
            text={"city of tagbilaran"}
            classname="uppercase text-[12px] leading-3"
          />
        </div>
      </div>
      <div className="flex gap-x-10 justify-center">
        <div className="relative">{QRCode}</div>
        <div className="w-[2px] bg-black"></div>
        <div className="uppercase ">
          <Title text={"Queue No"} textSize="text-[16px]" />
          <Title text={seriesno} textSize="text-[30px]" />
        </div>
      </div>
      <div className="flex justify-center items-center mb-[-10px]">
        <Title
          text="present this receipt to the collector"
          classname="uppercase"
          textSize="text-[12px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <table>
            <tbody>
              {headers.map((label, index) => (
                <tr key={index}>
                  <td className="text-start text-[10px] leading-3 capitalize w-20">
                    {label} :
                  </td>
                  <td className="text-start text-[10px] leading-4 font-semibold">
                    {
                      [
                        billDate ? ` ${billDate}` : "",
                        ` ${payerName}`,
                        addr ? ` ${addr}` : "",
                        `${particular}`,
                        QRData ? ` ${QRData}` : "",
                        total ? ` ${total}` : "",
                      ][index]
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default forwardRef(PaymentPrintTicket);
