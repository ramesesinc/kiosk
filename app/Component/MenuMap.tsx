import React, { ReactNode } from "react";
import MenuButton from "./MenuButton";

interface MenuMapProps {
  menuConfig: {
    link: string;
    title: string;
    iconImg: ReactNode;
  }[];
}

const MenuMap: React.FC<MenuMapProps> = ({ menuConfig }) => {
  return menuConfig.map((config, index) => (
    <MenuButton
      key={index}
      link={config.link}
      iconImg={config.iconImg}
      title={config.title}
    />
  ));
};

export default MenuMap;
