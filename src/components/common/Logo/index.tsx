import Text from '@components/atoms/Text';
import React from 'react';

interface LogoProps {
  isShowLabel?: boolean;
}

const LogoApp: React.FC<LogoProps> = ({ isShowLabel = true }) => (
  <div className='flex items-center gap-x-2'>
    <div className='w-16 h-14 bg-red-500 rounded-xl' />
    {isShowLabel && <Text>My App</Text>}
  </div>
);

export default LogoApp;
