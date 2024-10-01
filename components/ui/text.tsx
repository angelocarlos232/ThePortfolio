import React from 'react';

interface TextProps {
  variant?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

const textVariants = {
  small: 'text-sm leading-4',
  medium: 'text-base tracking-tight font-[600]',
  large: 'text-xl leading-7',
};

export const Text: React.FC<TextProps> = ({ variant = 'medium', children, className = '' }) => {
  const variantClasses = textVariants[variant];
  return <span className={`text-gray-text ${variantClasses} ${className}`}>{children}</span>;
};
