/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useEffect, useState } from "react";
import Button from "./Button";
import Images from "./Image";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Numbers from "./Numbers";
import Subtitle from "./Subtitle";
import { MdOutlineClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  image?: string | undefined;
  imageHeight?: number | undefined;
  imageWidth?: number | undefined;
  subtitle?: string | undefined;
  queuetitle?: string | undefined;
  title?: string;
  number?: number | undefined;
  cityname?: string | undefined;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  children?: ReactNode;
  numberLayout?: string;
  textButton?: string | undefined;
  href?: string;
  onClick?: () => void;
  showClose?: string;
  alt?: string;
  buttonLayout?: string;
  seriesno?: string;
  date?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  image,
  subtitle,
  queuetitle,
  title,
  number,
  paragraph1,
  paragraph2,
  paragraph3,
  imageHeight,
  imageWidth,
  children,
  numberLayout,
  textButton,
  href,
  onClick,
  showClose,
  alt,
  buttonLayout,
  cityname,
  seriesno,
  date,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#00000080] flex justify-center items-center z-[1]`}
    >
      <form className="w-[60%] flex flex-col items-center gap-10 bg-white p-8 rounded-2xl z-10">
        <div className={`flex justify-end w-full ml-36 ${showClose}`}>
          <Button onClick={onClose} className="text-[#333] border-none">
            <MdOutlineClose size={50} />
          </Button>
        </div>

        <Title text={queuetitle || ""} className="text-[27px]" />
        <div>
          <Images
            src={image || ""}
            alt={alt || ""}
            height={imageHeight || 0}
            width={imageWidth || 0}
          />
          <Title text={cityname || ""} />
          <Title text={seriesno || ""} />
          <Title text={date || ""} />
        </div>
        {children}
        <div className=" w-full">
          <Subtitle
            text={subtitle || ""}
            className="text-[20px] uppercase font-semibold text-center"
          />
          <Title
            text={title || ""}
            className="text-red-500 text-[29px] text-center capitalize"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Numbers
            number={number}
            className={`text-[50px] font-bold ${numberLayout}`}
          />
          <Paragraph text={paragraph1 || ""} />
          <Paragraph text={paragraph2 || ""} />
          <Paragraph text={paragraph3 || ""} />
        </div>
        <div>
          <Button
            text={textButton}
            href={href}
            className={`bg-light-blue text-white ${buttonLayout}`}
            onClick={onClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Modal;
