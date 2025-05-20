'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}) => {
  const baseStyle =
    'px-4 py-2 rounded-lg font-semibold border border-[1px] transition-colors duration-200';

  const variantStyles: { [key in NonNullable<ButtonProps['variant']>]: string } = {
    primary: 'bg-transparent text-black border-gray-400 hover:bg-gray-100',
    secondary: 'bg-transparent text-[#800020] border-[#800020] hover:bg-[#f3d6da]',
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
