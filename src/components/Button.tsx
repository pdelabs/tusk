"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold border border-[1px] transition-colors duration-200";

  const variantStyles: {
    [key in NonNullable<ButtonProps["variant"]>]: string;
  } = {
    primary:
      "bg-transparent text-gray-100 border-gray-400 hover:bg-gray-3d00 hover:shadow-text",
    secondary:
      "hidden sm:inline-block bg-transparent text-[#800020] border-[#800020] hover:bg-[#f3d6da]",
  };

  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
