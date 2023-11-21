import Footer from "@/component/layouts/footer";
import Header from "@/component/layouts/header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header logo={"/images/cebu-logo.png"} />

      <div className="">
        <main>{children}</main>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full">
        <Footer logo={"/images/etracs-logo.png"} />
      </div>
    </>
  );
};

export default Layout;
