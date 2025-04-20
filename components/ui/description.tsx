interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const Description = ({ children, className = '' }: DescriptionProps) => {
  return (
    <p className={`text-gray-text text-sm md:text-2xl lg:text-base ${className}`}>{children}</p>
  );
};
