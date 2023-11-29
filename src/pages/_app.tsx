import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { KeyboardContextProvider } from "@/components/keyboard/KeyboardContext";
import KioskLayout from "@/components/keyboard/KioskLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KeyboardContextProvider>
      <KioskLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </KioskLayout>
    </KeyboardContextProvider>
  );
}
