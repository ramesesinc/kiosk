import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  height,
  width,
  className,
}) => {
  const containerStyle: React.CSSProperties = {
    width: "100%", // Adjust based on your layout needs
    height: "auto",
  };

  const imageStyle: React.CSSProperties = {
    width: width ? `${width}px` : "100%", // Set width if provided, otherwise full width
    height: height ? `${height}px` : "auto", // Set height if provided, otherwise auto
  };

  return (
    <div style={containerStyle} className={className}>
      <img src={src} alt={alt} style={imageStyle} className="w-full h-auto" />
    </div>
  );
};

export default Image;
