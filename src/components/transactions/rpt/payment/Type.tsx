import Button from "@/components/ui/Button";
import Images from "@/components/ui/Images";
import Title from "@/components/ui/Title";
import { useTaxBillingContext } from "@/services/context/rpt-context";
import paymentTypeData from "@/stores/paymenttype-items";
import React, { useState } from "react";
import PaymentTicket from "../ticket/PaymentTicket";
import Card from "@/components/ui/Card";
import Alert from "@/components/layout/Alert";

const useModal = () => {
  const [openTicket, setOpenTicket] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<any>(null);

  const handleOpenTicket = (content: any) => {
    setModalContent(content);
    setOpenTicket(true);
  };

  const handleCloseTicket = () => {
    setModalContent(null);
    setOpenTicket(false);
  };

  return { openTicket, handleOpenTicket, handleCloseTicket, modalContent };
};

const PaymentType = () => {
  const { code, ticketNo } = useTaxBillingContext();
  const [openAlert, setOpenAlert] = useState(false);
  const { openTicket, handleOpenTicket, handleCloseTicket, modalContent } =
    useModal();

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  return (
    <div className="flex flex-col gap-y-20">
      <Title
        text={"How do you like to pay?"}
        textSize="text-5xl capitalize text-center"
      />
      <div className="flex justify-center text-center items-center gap-x-20">
        {paymentTypeData.map(
          (info, index) =>
            !info.disabled && (
              <Card
                key={index}
                image={{
                  img: info.image,
                  height: 250,
                  width: 250,
                }}
                title={{
                  label: info.title,
                  classname: "uppercase font-bold",
                }}
                onClick={
                  info.title === "GCASH"
                    ? handleOpenAlert
                    : () => handleOpenTicket(info.modalcontent)
                }
              />
            )
        )}

        {modalContent && (
          <PaymentTicket
            isOpen={openTicket}
            onClose={handleCloseTicket}
            rpttxntype={code}
            seriesno={ticketNo}
          />
        )}
        <Alert
          isOpen={openAlert}
          onClose={handleCloseAlert}
          errorMessage="GCASH Coming Soon."
          img={"/images/GCash-alert.png"}
        />
      </div>
    </div>
  );
};

export default PaymentType;
