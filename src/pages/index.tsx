import Button from "@/components/ui/Button";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import router from "next/router";
import Layout from "./layout";

const index = () => {
  return (
    <Layout>
      <Title
        text={"Experience ease of doing business with the government"}
        textSize="text-6xl"
      />
      <Subtitle
        text={
          "Over 50 local government units participating all over the Philippines"
        }
        textSize="text-3xl"
      />
      <Button
        buttonText="Tap to Start"
        classname="border-none !text-[55px] mt-48 font-bold uppercase"
        onClick={() => {
          router.push("/menu");
        }}
      />
    </Layout>
  );
};

export default index;
