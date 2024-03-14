import Keyboard from "@/components/keyboard/Keyboard";
import ActionBar from "@/components/layout/ActionBar";
import Alert from "@/components/layout/Alert";
import Button from "@/components/ui/Button";
import Textbox from "@/components/ui/Textbox";
import Title from "@/components/ui/Title";
import useTimer from "@/hooks/useTimer";
import { lookupService } from "@/libs/client-service";
import { useBillingContext } from "@/services/context/billing-context";
import { useStepper } from "@/services/context/stepper-context";
import { loadBill } from "@/utils/bpls";
import { sleep } from "@/utils/helper";
import { useRef, useState } from "react";
import Layout from "./Layout";

const BplsInitial = () => {
  const { goToNextStep, goToPrevStep } = useStepper();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setBill } = useBillingContext();
  const bin = useRef<HTMLInputElement>(null);
  const svc = lookupService("BplsBillingService");

  const timeLimit = 120000;
  useTimer(timeLimit);

  const openAlert = (message: any) => {
    setErrorMessage(message);
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const validInfo = async () => {
    const refno = bin?.current?.value?.trim();
    if (!refno) {
      openAlert("Enter BIN Number");
      return false;
    } else {
      const data = await loadBill(svc, { refno, qtr: 4 });
      if (!data) {
        openAlert("BIN number does not exist");
        return false;
      } else {
        await sleep(2);
        setBill(data);
        goToNextStep();
        return true;
      }
    }
  };

  const nextPage = async () => {
    if (!validInfo()) return;
  };

  return (
    <Layout>
      <Title
        text={
          "Enter a Valid Business Identification Number (BIN) or Application No."
        }
        textSize="text-4xl m-4"
      />
      <Textbox
        placeholder={"Enter BIN"}
        className="border-2 border-gray-400 w-full"
        ref={bin}
      />
      <Keyboard />
      <ActionBar>
        <Button
          onClick={() => goToPrevStep("/menu/bpls")}
          buttonText="Back"
          animation="shrink"
          classname="bg-[#567ac8] text-white"
        />
        <Button
          onClick={() => nextPage()}
          buttonText="Next"
          animation="shrink"
          classname="bg-light-blue text-white"
        />
      </ActionBar>
      <Alert
        isOpen={isAlertOpen}
        onClose={closeAlert}
        errorMessage={errorMessage}
        img={{
          src: "/icons/alert.png",
          width: 200,
          height: 200,
        }}
      />
    </Layout>
  );
};

export default BplsInitial;
