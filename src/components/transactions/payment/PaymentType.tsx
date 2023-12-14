import React from "react";
import Modal from "../../ui/Modal";
import Card from "../../ui/Card";
import paymentTypeData from "@/stores/paymenttypeitems";
import Card2 from "@/components/ui/Card2";

const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<any>(null);

  const openModal = (content: any) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal, modalContent };
};

const PaymentType = () => {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-10">
      {paymentTypeData.map((info, index) => (
        <Card2
          key={index}
          title={info.title}
          subtitle={info.subtitle}
          image={info.image}
          onClick={() => openModal(info.modalcontent)}
        />
      ))}

      {modalContent && (
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          image={modalContent.image}
          imageHeight={modalContent.imageHeight}
          imageWidth={modalContent.imageWidth}
          subtitle={modalContent.subtitle}
          title={modalContent.title}
          paragraph1={modalContent.paragraph1}
          paragraph2={modalContent.paragraph2}
          paragraph3={modalContent.paragraph3}
          number={modalContent.number}
          numberLayout={modalContent.numberLayout}
          textButton={modalContent.textButton}
          timeLayout={modalContent.timelayout}
          dateLayout={modalContent.datelayout}
        />
      )}
    </div>
  );
};

export default PaymentType;
