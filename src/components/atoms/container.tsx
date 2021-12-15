import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode | Element;
  className?: string;
};

export const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`w-full max-w-7xl mx-auto px-6 ${className}`}>{children}</div>;
};
