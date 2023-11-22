import React from "react";
import Link from "next/link";

function Button({
  text,
  onClick,
  href,
  className,
  children,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={`px-20 py-4 rounded-2xl border border-gray-400  ${className}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      className={` rounded-2xl border border-gray-400 ${className}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
