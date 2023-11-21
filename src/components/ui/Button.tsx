import React from "react";
import Link from "next/link";

function Button({
  text,
  onClick,
  href,
  className,
}: {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
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
    </button>
  );
}

export default Button;
