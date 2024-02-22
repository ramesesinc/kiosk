import BplsInitial from "@/components/transactions/details/Initial";
import { useStepper } from "@/services/context/stepper-context";
import BillingPage from "./details";
import PaymentPage from "./paymentdetails";
import PaymentTypePage from "./paymenttypepage";

const Index = () => {
  const { currentStep } = useStepper();

  return (
    <>
      {currentStep === 1 && <BplsInitial />}
      {currentStep === 2 && <BillingPage />}
      {currentStep === 3 && <PaymentPage />}
      {currentStep === 4 && <PaymentTypePage />}
    </>
  );
};

export default Index;
