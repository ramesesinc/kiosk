import React from "react";
import Link from "next/link";

type LandingPageProps = {
  heading: string;
  text: string;
  paragraph: string;
  link: string;
};

const LandingPage: React.FC<LandingPageProps> = ({
  heading,
  text,
  paragraph,
  link,
}) => {
  return (
    <main className="relative flex flex-col justify-center bglandingpage-image mt-[50px]">
      <div className="w-full gap-36 my-[200px]">
        <div className=" py-5 px-5 my-10 text-center ">
          <h1 className="text-[70px] font-bold leading-none">{heading}</h1>
          <p className="text-2xl">{paragraph}</p>
        </div>
        <div className="capitalize  m-auto py-5 px-5 my-10  text-center">
          <Link href={link}>
            <button className="text-[70px] font-bold text-[#335F96] pt-[20px] mt-[120px] ">
              {text}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
