import BillingInfo from "@/components/transactions/billing/BillingInfo";
import Button from "@/components/ui/Button";
import useTimer from "@/hooks/useTimer";
import router from "next/router";

const BillingInformation = () => {
  // const timeLimit = 120000;
  // useTimer(timeLimit);

  return (
    <div className="w-full flex flex-col justify-between items-center">
      <BillingInfo />
      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} 
          onClick={() => router.push("/menu/business")}  
          />
        <Button
          text={"Next"}
          onClick={() => router.push("/menu/business/paymentInfo")}  
          className="bg-light-blue text-white"
        />
      </div>
    </div>
  );
};

export default BillingInformation;
