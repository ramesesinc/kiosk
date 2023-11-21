import React, { ReactNode } from "react";
import Paragraph from "../ui/paragraph";
import Images from "../ui/Image";

interface IconButtonProps {
  imageUrl: string;
  altText: string;
  onClick?: () => void;
  title: string;
  className?: string;
}

const MenuIcon: React.FC<IconButtonProps> = ({
  imageUrl,
  altText,
  onClick,
  title,
  className,
}) => {
  return (
    <div className="">
      <div className=" w-full flex justify-center">
        <div
          className={`flex flex-col justify-center items-center w-40 h-40 rounded-full bg-light-blue ${className}`}
          onClick={onClick}
        >
          <Images src={imageUrl} alt={altText} height={100} width={100} />
        </div>
      </div>
      <Paragraph text={title} className="m-2" />
    </div>
  );
};

export default MenuIcon;
