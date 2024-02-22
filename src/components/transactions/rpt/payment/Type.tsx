import Button from "@/components/ui/Button";
import Images from "@/components/ui/Images";
import Title from "@/components/ui/Title";
import { createFetch } from "@/libs/fetch";
import { generateCode } from "@/services/api/rptgenerate";
import { fetchNextSeries } from "@/services/api/queue";
import { useTaxBillingContext } from "@/services/context/rpt-context";
import paymentTypeData from "@/stores/paymenttypeitems";
import React, { useEffect } from "react";
import PaymentTicket from "../ticket/PaymentTicket";

const useModal = (exeFetchTicket: any, valGenerateCode: any) => {
  const [openTicket, setOpenTicket] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<any>(null);

  const handleOpenTicket = (content: any) => {
    setModalContent(content);
    setOpenTicket(true);
    exeFetchTicket({
      sectionid: valGenerateCode?.queuesection || "",
    });
  };

  const handleCloseTicket = () => {
    setModalContent(null);
    setOpenTicket(false);
  };

  return { openTicket, handleOpenTicket, handleCloseTicket, modalContent };
};

const PaymentType = () => {
  const { taxBillingInfo, selectedOption } = useTaxBillingContext();
  const { value: valGenerateCode, execute: exeGenerateCode } =
    createFetch(generateCode);
  const { value: valFetchTicket, execute: exeFetchTicket } =
    createFetch(fetchNextSeries);
  const { openTicket, handleOpenTicket, handleCloseTicket, modalContent } =
    useModal(exeFetchTicket, valGenerateCode);

  useEffect(() => {
    exeGenerateCode({
      refno: taxBillingInfo.tdno,
      txntype: "rpt",
      billtoqtr: selectedOption,
    });
  }, []);

  console.log(selectedOption, "rpt", valGenerateCode);

  return (
    <div className="flex flex-col justify-center text-center items-center gap-y-20">
      <Title
        text={"Choose preferred payment type"}
        textSize="text-5xl uppercase"
      />
      <div>
        {paymentTypeData.map(
          (info, index) =>
            !info.disabled && (
              <Button
                key={index}
                onClick={() => handleOpenTicket(info.modalcontent)}
                classname="border-none"
              >
                <Images img={info.image} />
                <Title text={info.title} />
              </Button>
            )
        )}

        {modalContent && (
          <PaymentTicket
            isOpen={openTicket}
            onClose={handleCloseTicket}
            rpttxntype={valGenerateCode?.code}
            seriesno={valFetchTicket?.ticketno}
          />
        )}
      </div>
    </div>
  );
};

export default PaymentType;
