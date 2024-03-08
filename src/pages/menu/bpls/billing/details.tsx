import ActionBar from "@/components/layout/ActionBar";
import BplsInfo from "@/components/transactions/details/Info";
import Button from "@/components/ui/Button";
import { useStepper } from "@/services/context/stepper-context";
import Layout from "./layout";

const BillingPage = () => {
  const { goToNextStep, goToPrevStep } = useStepper();

  return (
    <Layout>
      <BplsInfo />
      <ActionBar>
        <Button
          onClick={() => goToPrevStep("/menu/bpls")}
          buttonText="Back"
          animation="shrink"
        />
        <Button
          onClick={goToNextStep}
          buttonText="Next"
          classname="bg-light-blue text-white"
          animation="shrink"
        />
      </ActionBar>
    </Layout>
  );
};

export default BillingPage;
