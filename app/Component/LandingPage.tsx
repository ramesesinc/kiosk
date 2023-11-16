import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="relative flex flex-col justify-center bglandingpage-image mt-[50px]">
      <div className="w-full gap-36 my-[200px]">
        <div className=" py-5 px-5 my-10 text-center ">
          <h1 className="text-[70px] font-bold leading-none">
            Experience ease of doing business with the government
          </h1>
          <p className="text-2xl">
            Over 50 local government units participating all over the
            Philippines
          </p>
        </div>
        <div className="capitalize  m-auto py-5 px-5 my-10  text-center">
          <Link href={"/menu"}>
            <button className="text-[70px] font-bold text-[#335F96] pt-[20px] mt-[120px] ">
              Tap to start !
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
