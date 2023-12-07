import HomePage from "@/components/landingpage/HomePage";
import router from "next/router";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center">
      <HomePage
        backgroundImage={"/images/image-bg.png"}
        title={"Experience ease of doing business with the government"}
        subtitle={
          "Over 50 local government units participating all over the Philippines"
        }
        buttonText={"Tap to Start"}
        onClick={() => {
          router.push("/menu");
        }}
      />
    </div>
  );
};

export default Home;
