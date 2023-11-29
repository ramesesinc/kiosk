import BillingInfo from "@/components/transactions/billing/BillingInfo";
import Button from "@/components/ui/Button";
import useTimer from "@/hooks/useTimer";

const BillingInformation = () => {
  // const timeLimit = 120000;
  // useTimer(timeLimit);

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <BillingInfo />
      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} href="/menu/property" />
        <Button
          text={"Next"}
          href="/menu/property/paymentInfo"
          className="bg-light-blue text-white"
        />
      </div>
    </div>
  );
};

export default BillingInformation;
