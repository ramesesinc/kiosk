import React from "react";

interface CurrencyComponentProps {
  amount: number | string;
  currency?: string;
  caption?: string;
  classname?: string;
}

const Currency: React.FC<CurrencyComponentProps> = ({
  amount,
  currency,
  caption,
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
      style: currency ? "currency" : "decimal",
      currency: currency === "Php" || currency === "USD" ? currency : undefined,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    const formattedValue = numericAmount.toLocaleString(undefined, options);

    return formattedValue;
  };

  return (
    <>
      {caption && (
        <span className={`pr-5 uppercase font-bold ${classname}`}>
          {caption} :
        </span>
      )}
      <div className={`${classname}`}>{formattedAmount()}</div>
    </>
  );
};

export default Currency;
