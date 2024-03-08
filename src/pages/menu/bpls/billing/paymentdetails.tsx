import Keyboard from "@/components/keyboard/Keyboard";
import PaymentInformation from "@/components/transactions/payment/Info";
import Layout from "./layout";

const PaymentPage = () => {
  return (
    <Layout>
      <PaymentInformation />
      <Keyboard />
    </Layout>
  );
};

export default PaymentPage;
