/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import useTimer from "../functions/Timer";
import MenuMap from "../Component/MenuMap";
import menuConfig from "../configJSON/menuConfig";

export default function page() {
  const timeLimit = 10000;
  useTimer(timeLimit);

  return (
    <div className="mt-[100px]">
      <div className="grid grid-rows-2 grid-flow-col justify-center items-center gap-20 w-full mt-[20px]">
        {MenuMap({ menuConfig })}
      </div>
    </div>
  );
}
