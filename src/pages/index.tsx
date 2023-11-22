import HomePage from "@/components/landingpage/HomePage";

import React from "react";

const Home = () => {
  return (
    <div>
      <HomePage
        backgroundImage={"/images/bg-image.png"}
        title={"Experience ease of doing business with the government"}
        subtitle={
          "Over 50 local government units participating all over the Philippines"
        }
        buttonText={"Tap to Start"}
      />
    </div>
  );
};

export default Home;
