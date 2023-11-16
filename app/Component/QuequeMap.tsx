import React from "react";
import CategoryQue from "./CategoryQue";

interface QueueMapProps {
  queueConfig: {
    text: string;
  }[];
}

const QuequeMap: React.FC<QueueMapProps> = ({ queueConfig }) => {
  return queueConfig.map((config, index) => (
    <CategoryQue key={index} text={config.text} />
  ));
};

export default QuequeMap;
