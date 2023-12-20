import ActionBar from "@/components/layouts/ActionBar";
import BplsInitial from "@/components/transactions/bpls/BplsInitial";
import BplsLayout from "@/components/transactions/bpls/BplsLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PaymentInfoPage from "../billing/billingpayment";
import PaymentTypePage from "../billing/billingpaymenttype";
import BillingInformationPage from "../billing/billinfo";

const Index = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const goToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToBackStep = () => {
    router.replace("/menu/bpls");
  };

  const isLastPage = currentStep === 4;

  return (
    <BplsLayout>
      {currentStep === 1 && <BplsInitial placeholder={"Enter BIN"} />}
      {currentStep === 2 && <BillingInformationPage />}
      {currentStep === 3 && <PaymentInfoPage />}
      {currentStep === 4 && <PaymentTypePage />}
      <div className="mt-4">
        <ActionBar
          backRoute={goToBackStep}
          nextRoute={goToNextStep}
          hideNextButton={isLastPage}
        />
      </div>
    </BplsLayout>
  );
};

export default Index;
