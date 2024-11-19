import { lookupService } from "@/libs/client-service";
import { useStepper } from "@/services/context/stepper-context";
import Image from "next/image";
import router from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Header: React.FC = () => {
  const { resetStep } = useStepper();
  const [lguName, setLguName] = useState();
  const [lguLgo, setLguLogo] = useState("");
  const svc = lookupService("LguService");

  const backToLandingPage = () => {
    resetStep();
    router.push("/");
  };

  useEffect(() => {
    fetchLguInfo();
  }, []);

  const fetchLguInfo = async () => {
    const info = await svc?.invoke("getLguInfo");
    setLguName(info.lguName);
    setLguLogo(info.logo);
  };

  return (
    <nav className="fixed top-0 left-0 flex flex-wrap  w-full items-center justify-between py-8 px-8 shadow-[0px_17px_25px_-10px_rgba(0,0,0,0.4)] touch-none">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex container mx-auto">
          <Button classname="!p-0 m-0 border-none" onClick={() => backToLandingPage()}>
            <Image src={lguLgo} alt={""} width={120} height={120} loading="eager" style={{ width: 120, height: 120 }} />
          </Button>
          <div className="border-solid border-2 border-black mx-8"></div>
          <div className="flex flex-col justify-center mx-4">
            <Title text={lguName} textSize="text-[40px] !capitalize" />
            <Subtitle text={"self service kiosk"} textSize="text-3xl !capitalize" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
