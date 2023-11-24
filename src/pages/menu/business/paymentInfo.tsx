import PaymentInformation from "@/components/transactions/payment/PaymentInformation";
import Button from "@/components/ui/Button";

const PaymentInfo = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <PaymentInformation />
      <div className="text-[30px] gap-20 flex justify-center items-center w-full">
        <Button text={"Back"} href="/menu/business/billingInfo" />
        <Button
          text={"Next"}
          href="/menu/business/paymentType"
          className="bg-light-blue text-white"
        />
      </div>
    </div>
  );
};

export default PaymentInfo;
