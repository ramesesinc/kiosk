import React from "react";
import QueueItems from "../../../stores/queueitems";
import QueueList from "@/components/queue/QueueList";
import Button from "@/components/ui/Button";
import useTimer from "@/hooks/useTimer";

const Index = () => {
  const timeLimit = 120000;
  useTimer(timeLimit);

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="text-[45px] px-28 pt-20 grid grid-cols-1 grid-flow-row gap-12">
        {QueueItems.map((config, index) => (
          <QueueList key={index} text={config.text} />
        ))}
      </div>
      <div className="text-[30px] gap-20 flex justify-center items-center absolute bottom-48 w-full">
        <Button text={"Back"} href="/menu" />
        <div className=" invisible">
          <Button text={"Next"} href="/" />
        </div>
      </div>
    </div>
  );
};

export default Index;
