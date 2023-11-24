import React from "react";
import Modal from "../../ui/Modal";
import Card from "../../ui/Card";

const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

const PaymentType = () => {
  const {
    isOpen: isModalOpenGcash,
    openModal: openModalGcash,
    closeModal: closeModalGcash,
  } = useModal();

  const {
    isOpen: isModalOpenCashier,
    openModal: openModalCashier,
    closeModal: closeModalCashier,
  } = useModal();

  return (
    <div className="flex gap-10">
      <Card
        title={"Gcash"}
        subtitle={"Pay here"}
        image={"/images/gcash.png"}
        onClick={openModalGcash}
      />

      <Card
        title={"Cashier"}
        subtitle={"Pay cashier"}
        image={"/images/cashier.png"}
        onClick={openModalCashier}
      />

      <Modal
        isOpen={isModalOpenGcash}
        onClose={closeModalGcash}
        image={"/images/qr.png"}
        imageHeight={100}
        imageWidth={300}
        title={"Step on how to pay using Gcash:"}
        paragraph1={"1. Open your Gcash and scan the Code."}
        paragraph2={"2. Pay the exact amount"}
        paragraph3={"3. Wait for the confirmation"}
        textButton={"Print"}
      />

      <Modal
        isOpen={isModalOpenCashier}
        onClose={closeModalCashier}
        image={"/images/qr.png"}
        imageHeight={100}
        imageWidth={300}
        title="Queue no."
        paragraph1="001"
        textButton={"Print"}
      />
    </div>
  );
};

export default PaymentType;
