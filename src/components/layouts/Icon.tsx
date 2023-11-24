import React, { ReactNode } from "react";
import Paragraph from "../ui/Paragraph";
import Images from "../ui/Image";

interface IconButtonProps {
  imageUrl: string;
  altText: string;
  onClick?: () => void;
  title: string;
  height: number;
  width: number
  className?: string;
}

const MenuIcon: React.FC<IconButtonProps> = ({
  imageUrl,
  altText,
  onClick,
  title,
  height,
  width,
  className,
}) => {
  return (
    <div className="">
      <div className=" w-full flex justify-center">
        <div
          className={`flex flex-col justify-center items-center w-32 h-32 rounded-full bg-light-blue ${className}`}
          onClick={onClick}
        >
          <Images src={imageUrl} alt={altText} height={height} width={width} />
        </div>
      </div>
      <div className="">
      <Paragraph text={title} className="m-2 text-center" />
      </div>
    </div>
  );
};

export default MenuIcon;
