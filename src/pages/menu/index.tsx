import Grid from "@/components/ui/Grid";
import React, { useEffect, useState } from "react";
import useTimer from "@/hooks/useTimer";
import Icon from "@/components/layouts/Icon";
import router from "next/router";
import { modules } from "@/stores/menuitems";

const QueueMenu = () => {
  const timeLimit = 15000;
  useTimer(timeLimit);

  return (
    <div className="flex justify-center m-20">
      {modules && (
        <Grid columns="grid-cols-3 gap-2">
          {modules.map((item, index) => (
            <Icon
              key={index}
              imageUrl={item.image}
              altText={item.alt}
              title={item.title}
              onClick={() => router.push(item.target)}
              height={item.height}
              width={item.width}
            />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default QueueMenu;
