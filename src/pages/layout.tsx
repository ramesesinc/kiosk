// Layout.tsx
import { lookupService } from "@/libs/client-service";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children?: ReactNode;
  classname?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, classname }) => {
  const [lguName, setLguName] = useState("");
  const [lguLgo, setLguLogo] = useState("");
  const svc = lookupService("LguService");

<<<<<<< HEAD
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  } as const;
=======
  useEffect(() => {
    fetchLguInfo();
  }, []);

  const fetchLguInfo = async () => {
    const info = await svc?.invoke("getLguInfo");
    setLguName(info.lguName);
    setLguLogo(info.logo);
  };
>>>>>>> origin/kiosk-dev

  useEffect(() => {
    fetchLguInfo();
  }, []);

  const fetchLguInfo = async () => {
    const info = await svc?.invoke("getLguInfo");
    setLguName(info.lguName);
    setLguLogo(info.logo);
  };

  return (
    <div className="bg-[#9fe3f6] h-screen py-20 px-14 touch-none">
      <div className="w-full flex flex-col gap-y-32">
        <div className="w-full flex flex-col items-center justify-center gap-y-14">
          <Image src={lguLgo} alt={""} width={250} height={250} style={{ width: 250, height: 250 }} />
          {children}
        </div>
        <div className="w-[800px] h-[800px] bg-gradient-to-bl from-[#64aadb] to-[#e5faff] rounded-full fixed left-[-170px] bottom-[-80px]" />
        <div className="w-[700px] h-[700px] bg-gradient-to-bl from-[#64aadb] to-[#e5faff] rounded-full fixed right-[-5px] bottom-[-300px]" />

        <div className="w-[250px] h-[250px] bg-[#ffde48] rounded-full fixed left-[250px] bottom-[500px] bubble1" />
        <div className="w-[220px] h-[220px] bg-[#ffde48] rounded-full fixed left-[20px] bottom-[350px] bubble2" />
        <div className="w-[190px] h-[190px] bg-[#ffde48] rounded-full fixed left-[140px] bottom-[120px] bubble3" />
        <div className="w-[170px] h-[170px] bg-[#ffde48] rounded-full fixed left-[360px] bottom-[20px] bubble4" />
        <div className="fixed bottom-0 right-[-80px]">
          <Image src={"/icons/illustration.png"} alt={""} width={700} height={700} style={{ width: 700, height: 700 }} />
        </div>
        <div className="fixed bottom-[10px] left-[10px]">
<<<<<<< HEAD
          <Image src={"/icons/etracslogo.png"} alt={""} width={180} height={50} style={{ width: 180, height: 50 }} />
=======
          <Image src={"/icons/etracslogo.png"} alt={""} width={180} height={50} style={{ width: 180, height: 50 }} unoptimized />
>>>>>>> origin/kiosk-dev
        </div>
      </div>
    </div>
  );
};

export default Layout;
