/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Numbers from "@/components/ui/Numbers";
import Subtitle from "@/components/ui/Subtitle";
import { useReactToPrint } from "react-to-print";
import QueuePrintTicket from "./QueuePrintTicket";

interface QueueTicketProps {
  isOpen: boolean;
  onClose?: () => void;
  showClose?: string;
  txndatestr?: string | undefined;
  ticketno?: string | undefined;
}

const QueueTicket: React.FC<QueueTicketProps> = ({
  isOpen,
  onClose,
  showClose,
  txndatestr,
  ticketno,
}) => {
  const [isPrinting, setIsPrinting] = React.useState(false);
  const componentRef = useRef<any>();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setIsPrinting(true);
    },
    onAfterPrint: () => {
      setIsPrinting(false);

      onClose && onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div>
      <div className="hidden">
        <QueuePrintTicket
          ref={componentRef}
          ticketno={ticketno}
          txndatestr={txndatestr}
        />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#00000080] flex flex-col justify-center items-center z-[1]`}
      >
        <div className="w-[60%] flex flex-col items-center gap-2 bg-white p-6 rounded-2xl z-10 ">
          <div className={`flex justify-end w-full ${showClose}`}>
            <Button onClick={onClose} className="text-[#333] border-none !px-0">
              <MdOutlineClose size={50} />
            </Button>
          </div>
          {isPrinting ? (
            // Loading Screen
            <div className="flex flex-col items-center justify-center pb-20 gap-10">
              <div className="w-12 h-12 relative animate-spin ">
                {[0, 90, 180, 260].map((rotation) => (
                  <div
                    key={rotation}
                    className={`w-4 h-4 bg-blue-500 rounded-full absolute ${
                      rotation < 180 ? "top-0" : "bottom-0"
                    } ${
                      rotation % 180 === 0 ? "left-0" : "right-0"
                    } animate-pulse`}
                  ></div>
                ))}
              </div>
              <Title
                text={"Printing Queue Ticket"}
                className="!text-[25px] !leading-[0px]"
              />
              <Subtitle
                text={" Please wait while your ticket is being printed."}
                className="text-[20px] !leading-[0px]"
              />
            </div>
          ) : (
            // Content when not printing
            <div className="text-center flex flex-col gap-20">
              <div className="flex flex-col gap-2">
                <Title text={"Queue Ticket Number"} />
                <Subtitle text={"CEBU CITY"} className="font-semibold" />
              </div>
              <div>
                <Numbers text={ticketno} className="font-bold text-9xl" />
              </div>
              <div className="flex flex-col gap-2">
                <Subtitle text={"This number is Valid only on"} />
                <Subtitle text={txndatestr || ""} />
              </div>
              <div>
                <Button text={"Print"} onClick={handlePrint} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueueTicket;
