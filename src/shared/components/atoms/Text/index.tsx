import clsx from 'clsx';
import React from 'react';

interface TextProps {
  type?: 'p' | 'span' | 'div';
  content?: string;
  children?: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
}
const Text: React.FC<TextProps> = ({ type = 'p', isDarkMode = true, children, content, className }) => {
  const Element = type;

  return content ? (
    <Element
      className={clsx('duration-300 ease-in-out', isDarkMode && 'dark:text-white', className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  ) : (
    <Element className={clsx('duration-300 ease-in-out', isDarkMode && 'dark:text-white', className)}>
      {children}
    </Element>
  );
};

export default Text;
