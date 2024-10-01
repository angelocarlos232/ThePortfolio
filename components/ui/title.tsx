import React from 'react';

type TitleVariant = 'primary' | 'secondary' | 'accent' | 'undefined';
type TitleSize = 'small' | 'medium' | 'large';

interface TitleProps {
  children: React.ReactNode;
  variant?: TitleVariant;
  size?: TitleSize;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '' 
}) => {
  const variantStyles = {
    primary: 'text-black',
    secondary: 'text-black',
    accent: 'text-black',
  };

  const sizeStyles = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
  };

  return (
    <h1 className={`
      font-black
      tracking-wider 
      ${variantStyles[variant]} 
      ${sizeStyles[size]} 
      ${className}
    `}>
      {children}
    </h1>
  );
};
