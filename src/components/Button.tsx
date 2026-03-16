"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyle =
    "inline-block px-4 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer";

  const variantStyles: {
    [key in NonNullable<ButtonProps["variant"]>]: string;
  } = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-[#800020] text-white border-[#800020] hover:bg-[#800020/50]",
  };

  return (
    <button
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
