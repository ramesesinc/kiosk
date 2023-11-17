import React from "react";
import LandingPage from "./Component/LandingPage";

const page = () => {
  const LandingPageConfig = [
    {
      heading: "Experience ease of doing business with the government",
      text: "Tap to Start !",
      link: "/menu",
      paragraph:
        "Over 50 local government units participating all over the Philippines",
    },
  ];

  const LandingPageComponents = LandingPageConfig.map((config, index) => (
    <LandingPage
      key={index}
      heading={config.heading}
      text={config.text}
      paragraph={config.paragraph}
      link={config.link}
    />
  ));

  return <div>{LandingPageComponents}</div>;
};

export default page;
