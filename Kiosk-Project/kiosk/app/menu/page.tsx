"use client";

import useTimer from "../functions/Timer";
import menuConfig from "../configJSON/menuConfig";
import MenuButton from "../Component/MenuButton";

export default function Page() {
  const timeLimit = 10000;
  useTimer(timeLimit);

  const MenuComponents = menuConfig.map((config, index) => (
    <MenuButton
      key={index}
      link={config.link}
      iconImg={config.iconImg}
      title={config.title}
    />
  ));

  return (
    <div className="mt-[100px]">
      <div className="grid grid-rows-2 grid-flow-col justify-center items-center gap-20 w-full mt-[20px]">
        {MenuComponents}
      </div>
    </div>
  );
}
