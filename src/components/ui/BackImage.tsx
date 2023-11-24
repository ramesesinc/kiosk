import React from "react";

interface BackImageProps {
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
}

const BackImage: React.FC<BackImageProps> = ({
  imageUrl,
  children,
  className,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default BackImage;
