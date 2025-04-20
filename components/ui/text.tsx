import React from 'react';

interface TextProps {
  variant?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

const textVariants = {
  small: 'text-xs sm:text-sm leading-4',
  medium: 'text-sm sm:text-base tracking-tight font-[600]',
  large: 'text-base sm:text-lg md:text-xl leading-6 md:leading-7',
};

export const Text: React.FC<TextProps> = ({ variant = 'medium', children, className = '' }) => {
  const variantClasses = textVariants[variant];
  return <span className={`text-gray-text ${variantClasses} ${className}`}>{children}</span>;
};
