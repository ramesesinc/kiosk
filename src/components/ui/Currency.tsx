import React from "react";

interface CurrencyComponentProps {
  amount: number | string;
  currency?: string;
  caption?: string;
  showCurrencySign?: boolean;
  classname?: string;
}

const Currency: React.FC<CurrencyComponentProps> = ({
  amount,
  currency = "Php",
  caption,
  showCurrencySign = false,
  classname,
}) => {
  const formattedAmount = () => {
    const numericAmount =
      typeof amount === "string" ? parseFloat(amount) : amount;

    if (isNaN(numericAmount)) {
      return "Invalid Amount";
    }

    const decimalPlaces = (numericAmount.toString().split(".")[1] || []).length;

    const options = {
      style: showCurrencySign ? "currency" : "decimal",
      currency: showCurrencySign ? currency : undefined,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    return numericAmount.toLocaleString(undefined, options);
  };

  return (
    <div className="">
      {caption && (
        <span className={`pr-5 uppercase font-bold ${classname}`}>
          {caption} :
        </span>
      )}
      <div className={`${classname}`}>{formattedAmount()}</div>
    </div>
  );
};

export default Currency;
