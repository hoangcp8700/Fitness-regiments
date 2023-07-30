import clsx from 'clsx';
import React from 'react';

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}
const Heading: React.FC<HeadingProps> = ({ type = 'h2', children, className, isDarkMode = true }) => {
  const Element = type;

  return (
    <Element className={clsx('duration-300 ease-in-out', isDarkMode && 'dark:text-white', className)}>
      {children}
    </Element>
  );
};

export default Heading;
