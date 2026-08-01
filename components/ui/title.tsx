import React from "react";

type TitleVariant = "primary" | "secondary" | "accent" | "undefined";
type TitleSize = "small" | "medium" | "large";

interface TitleProps {
  children: React.ReactNode;
  variant?: TitleVariant;
  size?: TitleSize;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
}) => {
  const variantStyles = {
    primary: "text-black",
    secondary: "text-black",
    accent: "text-black",
  };

  const sizeStyles = {
    small: "text-xl md:text-2xl",
    medium: "text-2xl md:text-3xl lg:text-4xl",
    large: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  };

  return (
    <h1
      className={`
      font-black
      tracking-wider 
      ${variantStyles[variant as keyof typeof variantStyles]} 
      ${sizeStyles[size]} 
      ${className}
    `}
    >
      {children}
    </h1>
  );
};
