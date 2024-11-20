import LibreFranklin from "@/components/fonts/LibreFranklin";
import { KeyboardContextProvider } from "@/components/keyboard/KeyboardContext";
import { BillingProvider } from "@/services/context/billing-context";
import { OboBillingProvider } from "@/services/context/obo-context";
import { QueueContextProvider } from "@/services/context/queue-context";
import { RptBillingProvider } from "@/services/context/rpt-context";
import { StepperProvider } from "@/services/context/stepper-context";
import "@/styles/globals.css";
import DisableContextMenu from "@/utils/DisableContextMenu";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DisableContextMenu>
      <LibreFranklin />
      <StepperProvider>
        <KeyboardContextProvider>
          <QueueContextProvider>
            <BillingProvider>
              <RptBillingProvider>
                <OboBillingProvider>
                  <Component {...pageProps} />
                </OboBillingProvider>
              </RptBillingProvider>
            </BillingProvider>
          </QueueContextProvider>
        </KeyboardContextProvider>
      </StepperProvider>
    </DisableContextMenu>
  );
}
