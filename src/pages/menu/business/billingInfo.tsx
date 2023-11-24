import BillingInfo from "@/components/transactions/billing/BillingInfo";
import Button from "@/components/ui/Button";

const BillingInformation = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
        <BillingInfo />
      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} href="/menu/business" />
        <Button
          text={"Next"}
          href="/menu/business/paymentInfo"
          className="bg-light-blue text-white"
        />
      </div>
    </div>
  );
};

export default BillingInformation;
