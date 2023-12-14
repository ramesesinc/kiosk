import React, { forwardRef, ForwardRefRenderFunction, Ref } from "react";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Numbers from "../ui/Numbers";

interface QueuePrintTicketProps {
  seriesno?: number;
  txndatestr: string | undefined;
}

const QueuePrintTicket: ForwardRefRenderFunction<
  HTMLDivElement,
  QueuePrintTicketProps
> = ({ seriesno, txndatestr }, ref: Ref<HTMLDivElement>) => (
  <div ref={ref} className={`!text-center`}>
    <div className="flex flex-col !text-center">
      <Title
        text={"Queue Ticket Number"}
        className="!text-[20px] leading-none"
      />
      <Subtitle
        text={"CEBU CITY"}
        className="font-semibold text-[20px] leading-[30px]"
      />
    </div>
    <div>
      <Numbers
        number={seriesno}
        className="font-bold text-[50px] !text-center py-6"
      />
    </div>
    <div className="grid text-center">
      <Subtitle
        text={"This number is Valid only on"}
        className="text-[15px] leading-[22px]"
      />
      <Subtitle text={txndatestr || ""} className="text-[15px] leading-none" />
    </div>
  </div>
);

export default forwardRef(QueuePrintTicket);
