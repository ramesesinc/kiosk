"use client";

import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { lookupService } from "@/libs/client-service";
import router from "next/router";
import { useEffect, useState } from "react";
import Layout from "./layout";

const index = () => {
  const [lguName, setLguName] = useState("");
  const svc = lookupService("LguService");

  useEffect(() => {
    fetchLguInfo();
  }, []);

  const fetchLguInfo = async () => {
    const info = await svc?.invoke("getLguInfo");
    setLguName(info.lguName);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-y-28">
        <div className="flex flex-col text-center font-bold gap-y-2 ">
          <Title text={lguName} classname="text-6xl" />
          <Title text={"self-service ticket kiosk"} classname="uppercase text-3xl" />
        </div>
        <div className="text-center">
          <Title text={"now you can check your billing in one place!"} classname="uppercase text-5xl" />
        </div>
        <div>
          <Title text="Welcome! How may we help you today?" classname="font-light text-5xl" />
        </div>
        <div className="relative z-10">
          <Button classname="text-white uppercase bg-[#41597f] rounded-3xl text-4xl font-bold" onClick={() => router.push("/menu")}>
            tap to begin
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default index;
