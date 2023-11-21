import MenuIcon from "@/component/layouts/Icon";
import Grid from "@/component/ui/Grid";
import React from "react";
import { modules } from "@/stores/MenuItems";
import useTimer from "@/functions/Timer";

const QueueMenu = () => {
  const timeLimit = 10000;
  useTimer(timeLimit);

  return (
    <div className="flex justify-center m-20">
      <Grid columns="grid-cols-3 gap-8">
        {modules.map((module, index) => (
          <MenuIcon
            key={index}
            imageUrl={module.image}
            altText={module.alt}
            title={module.title}
            onClick={() => (window.location.href = module.target)}
          />
        ))}
      </Grid>
    </div>
  );
};

export default QueueMenu;
