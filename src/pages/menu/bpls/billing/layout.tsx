import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen touch-none">
      <Header />
      <div className="pt-64 p-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
