import React, { ReactNode } from "react";

type FlexProps = {
  children?: ReactNode;
  layout?: string;
};

const Flex: React.FC<FlexProps> = ({ children, layout }) => {
  return <div className={`flex ${layout}`}>{children}</div>;
};

export default Flex;
