import React from "react";
import CategoryOtherPayments from "./CategoryOtherPayments";

interface OtherPaymentsMapProps {
  otherPaymentsConfig: {
    link: string;
    text: string;
  }[];
}

const OtherPaymentsMap: React.FC<OtherPaymentsMapProps> = ({
  otherPaymentsConfig,
}) => {
  return otherPaymentsConfig.map((config, index) => (
    <CategoryOtherPayments key={index} text={config.text} link={config.link} />
  ));
};

export default OtherPaymentsMap;
