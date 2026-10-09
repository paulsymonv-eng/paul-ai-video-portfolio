type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export function Container({ children, className = "", wide = false }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${wide ? "max-w-7xl" : "max-w-[1240px]"} px-5 sm:px-6 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
