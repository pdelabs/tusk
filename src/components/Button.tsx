'use client';

import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
}) => {
  const baseStyle =
    'inline-block px-4 py-2 rounded-lg font-semibold border border-[1px] transition-colors duration-200';

  const variantStyles: { [key in NonNullable<ButtonProps['variant']>]: string } = {
    primary: 'bg-transparent text-black border-gray-400 hover:bg-gray-100',
    secondary: 'bg-transparent text-[#800020] border-[#800020] hover:bg-[#f3d6da]',
  };

  return (
    <Link href={href} className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default Button;
