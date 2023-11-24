import React from "react";
import Link from "next/link";

function Button({
  text,
  onClick,
  href,
  className,
  children,
  display,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  display?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={`px-20 py-4 rounded-2xl border border-gray-400 ${display}  ${className}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={`px-20 py-4 rounded-2xl border border-gray-400 ${className} ${display}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
