import React from "react";
import LandingPage from "./Component/LandingPage";

export default function PrintComponent() {
  return (
    <>
      <LandingPage
        heading={"Experience ease of doing business with the goverment"}
        text={"Tap to start !"}
        paragraph={
          "Over 50 local goverment units participating all over the Philippines"
        }
        link={"/menu"}
      />
    </>
  );
}
