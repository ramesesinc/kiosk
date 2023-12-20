import ActionBar from "@/components/layouts/ActionBar";
import BillingInfo from "@/components/transactions/bpls/BillingInfo";
import BplsLayout from "@/components/transactions/bpls/BplsLayout";

const BillingInformationPage = () => {
  return (
    <BplsLayout>
      <BillingInfo />
    </BplsLayout>
  );
};

export default BillingInformationPage;
