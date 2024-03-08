import ActionBar from "@/components/layout/ActionBar";
import RptInfo from "@/components/transactions/rpt/details/Info";
import Button from "@/components/ui/Button";
import { useStepper } from "@/services/context/stepper-context";
import Layout from "./layout";

const TaxBillingPage = () => {
  const { goToNextStep, goToPrevStep } = useStepper();

  return (
    <Layout>
      <RptInfo />
      <ActionBar>
        <Button
          onClick={() => goToPrevStep("/menu/rpt")}
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

export default TaxBillingPage;
