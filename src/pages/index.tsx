import BackImage from "@/components/ui/BackImage";
import Button from "@/components/ui/Button";
import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import React from "react";

const Home = () => {
  return (
    <div>
      <BackImage
        imageUrl={"/images/bg-image.png"}
        className="flex flex-col justify-start pt-[22rem] items-center text-center gap-5 relative"
      >
        <Title
          text={"Experience ease of doing business with the government"}
          className="text-6xl"
        />
        <Subtitle
          text={
            "Over 50 local government units participating all over the Philippines"
          }
          className="text-[24px]"
        />
        <Button
          text={"Tap to Start"}
          className="border-none text-[50px] absolute bottom-[300px] font-bold uppercase"
          href="/menu"
        />
      </BackImage>
    </div>
  );
};

export default Home;
