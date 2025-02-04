import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex justify-center text-center touch-none">
      <Header />
      <div className="flex flex-col mt-72 m-8 w-full gap-y-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
