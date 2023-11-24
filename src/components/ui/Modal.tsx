import React, { ReactNode } from "react";
import styles from "../../styles/Modal.module.css";

import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "./Button";
import Images from "./Image";
import Title from "./Title";
import Paragraph from "./Paragraph";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  image?: string | undefined;
  imageHeight?: number | undefined;
  imageWidth?: number | undefined;
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  children?: ReactNode;
  textButton: string;
  href?: string;
  onClick?: () => void;
  showClose?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  image,
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  imageHeight,
  imageWidth,
  children,
  textButton,
  href,
  onClick,
  showClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} z-[1]`}>
      <form className="w-[60%] flex flex-col items-center gap-10 bg-white p-8 rounded-2xl z-10">
        <div className={`flex justify-end w-full ml-32 ${showClose}`}>
          <Button
            text={""}
            onClick={onClose}
            className="text-red-500 border-none"
          >
            <IoCloseCircleOutline size={60} />
          </Button>
        </div>
        {children}
        <div>
          <Images
            src={image || ""}
            alt={""}
            height={imageHeight || 0} // Provide a default value, replace 100 with your desired default height
            width={imageWidth || 0} // Provide a default value, replace 300 with your desired default width
          />
        </div>
        <div className=" w-full">
          <Title
            text={title || ""}
            className="text-red-500 text-[29px] text-center"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Paragraph text={paragraph1 || ""} />
          <Paragraph text={paragraph2 || ""} />
          <Paragraph text={paragraph3 || ""} />
        </div>
        <div>
          <Button
            text={textButton}
            href={href}
            className="bg-light-blue text-white"
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
