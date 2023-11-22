import PaymentInformation from "@/components/transactions/PaymentInformation";
import Button from "@/components/ui/Button";

const PaymentInfo = () => {
  return (
    <div className="text-[45px] mt-8">
      <PaymentInformation />
      <div className="text-[30px] gap-20 flex justify-center items-center absolute bottom-48 w-full">
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
