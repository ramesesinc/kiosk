import React from "react";
import BackImage from "../ui/BackImage";
import Title from "../ui/Title";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

interface HomeProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

const HomePage: React.FC<HomeProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div>
      {" "}
      <BackImage
        imageUrl={backgroundImage}
        className="flex flex-col justify-start pt-[22rem] items-center text-center gap-5 relative"
      >
        <Title text={title} className="text-7xl" />
        <Subtitle text={subtitle} className="text-4xl" />
        <Button
          text={buttonText}
          className="border-none text-[50px] absolute bottom-[300px] font-bold uppercase"
          href="/menu"
        />
      </BackImage>
    </div>
  );
};

export default HomePage;
