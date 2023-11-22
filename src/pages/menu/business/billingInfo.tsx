import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const BillingInformation = () => {
  const router = useRouter();
  const { BillingInformation } = router.query;

  return (
    <div>
      <h1>Billing Information: {BillingInformation}</h1>
      <div className="text-[30px] gap-20 flex justify-center items-center absolute bottom-48 w-full">
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
