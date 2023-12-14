import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="touch-none">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <div className="">
          <Header logo={"/images/cebu-logo.png"} />
        </div>

        <main className="flex-1 flex justify-center p-14">{children}</main>

        {/* Footer */}
        <div className="flex-shrink-0">
          <Footer logo={"/images/etracs-logo.png"} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
