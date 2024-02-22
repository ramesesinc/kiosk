// Icon.tsx
import React from "react";
import Images from "./Images";

interface IconProps {
  image: string;
  title: string;
  onClick?: () => void;
  size?: string; // You can customize the size as needed
  height?: number;
  width?: number;
  fontSize?: string;
  active: boolean;
}

const Icon: React.FC<IconProps> = ({
  image,
  title,
  onClick,
  height = 12,
  width = 12,
  fontSize,
  active = true,
}) => {
  return (
    <div className={`flex flex-col items-center ${active ? "" : "invisible"}`}>
      <div className="p-2 rounded-full bg-light-blue">
        <button onClick={onClick} className="p-4">
          <Images img={image} width={width} height={height} />
        </button>
      </div>
      <p className={`mt-4 ${fontSize}`}>{title}</p>
    </div>
  );
};

export default Icon;
