import Button from "@/component/ui/Button";
import Subtitle from "@/component/ui/Subtitle";
import Title from "@/component/ui/Title";
import BackImage from "@/component/ui/backImage";
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
          className="border-none text-[50px] absolute bottom-[320px] font-bold uppercase"
          href="/Menu"
        />
      </BackImage>
    </div>
  );
};

export default Home;
