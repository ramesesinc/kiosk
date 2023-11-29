import Grid from "@/components/ui/Grid";
import React from "react";
import useTimer from "@/hooks/useTimer";
import { modules } from "@/stores/menuitems";
import Icon from "@/components/layouts/Icon";

const QueueMenu = () => {
  const timeLimit = 15000;
  useTimer(timeLimit);

  return (
    <div className="flex justify-center m-20">
      <Grid columns="grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <Icon
            key={index}
            imageUrl={module.image}
            altText={module.alt}
            title={module.title}
            onClick={() => (window.location.href = module.target)}
            height={module.height}
            width={module.width}
          />
        ))}
      </Grid>
    </div>
  );
};

export default QueueMenu;
