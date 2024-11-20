import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <Header />
      <div className="flex flex-col pb-40 gap-y-16">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
