import clsx from 'clsx';
import React from 'react';

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ type = 'h2', children, className }) => {
  const Element = type;

  return <Element className={clsx('duration-300 ease-in-out', className)}>{children}</Element>;
};

export default Heading;
