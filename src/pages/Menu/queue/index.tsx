import React from "react";
import QueueItems from "../../../stores/QueueItems";
import QueueList from "@/component/queue/QueueList";
import Button from "@/component/ui/Button";
import useTimer from "@/functions/Timer";

const Index = () => {
  const timeLimit = 120000;
  useTimer(timeLimit);

  const QueueComponents = QueueItems.map((config, index) => (
    <QueueList key={index} text={config.text} />
  ));

  return (
    <div className="text-[45px] px-28 pt-20 grid grid-cols-1 grid-flow-row gap-8">
      {QueueComponents}
      <div>
        <Button
          text={"Back"}
          href="/Menu"
          className="shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] absolute bottom-[210px]"
        />
      </div>
    </div>
  );
};

export default Index;
