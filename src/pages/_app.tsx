import { KeyboardContextProvider } from "@/components/keyboard/KeyboardContext";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { BillingProvider } from "@/services/context/billing-context";
import { QueueContextProvider } from "@/services/context/queue-context";
import { RptBillingProvider } from "@/services/context/rpt-context";
import { StepperProvider } from "@/services/context/stepper-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault(); // Disable right-click
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length > 1) {
      event.preventDefault(); // Disable long press (multi-touch)
    }
  };
  return (
    <StepperProvider>
      <KeyboardContextProvider>
        <QueueContextProvider>
          <BillingProvider>
            <RptBillingProvider>
              <Header />
              <Component
                {...pageProps}
                onContextMenu={handleContextMenu}
                onTouchStart={handleTouchStart}
              />
              <Footer />
            </RptBillingProvider>
          </BillingProvider>
        </QueueContextProvider>
      </KeyboardContextProvider>
    </StepperProvider>
  );
}
