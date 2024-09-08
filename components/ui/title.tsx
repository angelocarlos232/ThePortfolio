export const Title = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <h1 className={`text-4xl font-bold tracking-wider ${className}`}>
      {children}
    </h1>
  );
};
