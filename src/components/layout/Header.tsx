import { useStepper } from "@/services/context/stepper-context";
import router from "next/router";
import React from "react";
import Button from "../ui/Button";
import Images from "../ui/Images";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Header: React.FC = () => {
  const { resetStep } = useStepper();

  const backToLandingPage = () => {
    resetStep();
    router.push("/");
  };
  return (
    <nav className="fixed top-0 flex w-full flex-wrap items-center justify-between py-8 px-8 shadow-[0px_17px_25px_-10px_rgba(0,0,0,0.4)] touch-none">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex container mx-auto">
          <Button
            classname="!p-0 m-0 border-none"
            onClick={() => backToLandingPage()}
          >
            <Images img={"/images/lgu-logo.jpg"} size={"medium"} />
          </Button>
          <div className="border-solid border-2 border-black mx-8"></div>
          <div className="flex flex-col justify-center mx-4">
            <Title
              text={"welcome to city of puerto princesa"}
              textSize="text-[38px] uppercase"
            />
            <Subtitle text={"Transaction Kiosk"} textSize="text-3xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
