// Layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
  classname?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, classname }) => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url("/images/bg-image.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  } as const;

  return (
    <div style={containerStyle} className="touch-none">
      <div className={`text-center m-8 ${classname}`}>{children}</div>
    </div>
  );
};

export default Layout;
