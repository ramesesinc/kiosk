import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  height: number;
  width: number;
  alt: string;
  className?: string;
}

const Images: React.FC<ImageProps> = ({
  src,
  height,
  width,
  alt,
  className,
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        quality={100}
        className={` ${className}`}
      />
    </div>
  );
};

export default Images;
