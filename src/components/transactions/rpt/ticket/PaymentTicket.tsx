/* eslint-disable react-hooks/rules-of-hooks */
import Button from "@/components/ui/Button";
import Images from "@/components/ui/Images";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { useTaxBillingContext } from "@/services/context/rpt-context";
import { useStepper } from "@/services/context/stepper-context";
import React, { useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import QRCode from "react-qr-code";
import { useReactToPrint } from "react-to-print";
import PaymentTicketPrint from "./PaymentTicketPrint";

interface PaymentTicketProps {
  isOpen: boolean;
  onClose?: () => void;
  showClose?: string;
  rpttxntype?: string;
  seriesno?: string;
}

const PaymentTicket: React.FC<PaymentTicketProps> = ({
  isOpen,
  onClose,
  showClose,
  rpttxntype,
  seriesno,
}) => {
  const { goToPrevStep } = useStepper();
  const [isPrinting, setIsPrinting] = React.useState(false);
  const componentRef = useRef<any>();
  const { taxBillingInfo, payerName, payerAddress } = useTaxBillingContext();
  const combinedData = `${rpttxntype}\n&paidby=${payerName}&paidbyaddress=${payerAddress}`;
  const headers = [
    "trxn date",
    "payer",
    "address",
    "particulars",
    "control no.",
    "total",
  ];

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

  return (
    <>
      <div className="hidden">
        <PaymentTicketPrint
          ref={componentRef}
          img={"/images/province-logo.png"}
          QRCode={<QRCode value={combinedData} size={70} />}
          addr={payerAddress}
          total={taxBillingInfo.amount}
          QRData={combinedData}
          billDate={taxBillingInfo.billdate}
          payerName={payerName}
          particular="Real Tax Billing and Payment"
          seriesno={seriesno}
        />
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#00000080] flex flex-col justify-center items-center z-[1]`}
      >
        <div className="w-[60%] relative flex flex-col items-center bg-white p-4 rounded-2xl z-10">
          <div className={`flex justify-end w-full ${showClose}`}>
            <Button onClick={onClose} classname="text-[#333] border-none !px-0">
              <MdOutlineClose size={50} />
            </Button>
          </div>
          {isPrinting ? (
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
                text={"Printing Ticket"}
                classname="!text-[25px] !leading-[0px]"
              />
              <Subtitle
                text={" Please wait while your ticket is being printed."}
                classname="text-[20px] !leading-[0px]"
              />
            </div>
          ) : (
            <>
              <div className="w-full flex flex-col gap-y-10">
                <div className="w-full flex justify-center items-center">
                  <Images
                    img={"/images/province-logo.png"}
                    width={110}
                    height={110}
                    classname=" absolute top-24 left-10"
                  />
                  <div className="flex flex-col w-72 ">
                    <Title
                      text={"republic of the philipines"}
                      classname="uppercase text-lg leading-5"
                    />
                    <Title
                      text={"province of bohol"}
                      classname="uppercase text-lg leading-5"
                    />
                    <Title
                      text={"city of tagbilaran"}
                      classname="uppercase text-lg leading-5"
                    />
                  </div>
                </div>
                <div className="flex gap-x-10 justify-center">
                  <div className="relative">
                    <div className="h-[20px] w-[4px] bg-black absolute top-[-12px] left-[-12px] rounded-full" />
                    <div className="h-[4px] w-[40px] bg-black absolute top-[-12px] left-[-12px] rounded-full" />
                    <QRCode
                      className="break-words"
                      value={combinedData}
                      size={90}
                    />
                    <div className="h-[20px] w-[4px] bg-black absolute bottom-[-12px] right-[-12px] rounded-full" />
                    <div className="h-[4px] w-[40px] bg-black absolute bottom-[-12px] right-[-12px] rounded-full" />
                  </div>
                  <div className="w-[2px] bg-black"></div>
                  <div className="uppercase">
                    <Title text={"Queue No"} />
                    <Title text={seriesno} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Title
                    text="present this receipt to the collector"
                    classname="uppercase"
                    textSize="text-xl"
                  />
                  <div className="flex justify-center gap-12">
                    <table>
                      <tbody>
                        {headers.map((label, index) => (
                          <tr key={index}>
                            <td className="text-start text-[15px] leading-6 capitalize">
                              {label}
                            </td>
                            <td className="text-start text-[15px] leading-6 font-semibold">
                              {
                                [
                                  taxBillingInfo.billdate
                                    ? `: ${taxBillingInfo.billdate}`
                                    : "",
                                  `: ${payerName}`,
                                  payerAddress ? `: ${payerAddress}` : "",
                                  ": Real Tax Billing and Payment",
                                  combinedData ? `: ${combinedData}` : "",
                                  taxBillingInfo.amount
                                    ? `: ${taxBillingInfo.amount}`
                                    : "",
                                ][index]
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <Button buttonText="Print" onClick={handlePrint} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentTicket;
