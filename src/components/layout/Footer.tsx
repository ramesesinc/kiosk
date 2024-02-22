import React from "react";
import Images from "../ui/Images";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-[0px_25px_17px_25px_rgba(0,0,0,0.4)] p-4">
      <div className="w-full flex items-center justify-center">
        <div>
          <Images img={"/images/etracs-logo.png"} height={40} width={130} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//shadow-[0px_17px_25px_-10px_rgba(0,0,0,0.4)]
