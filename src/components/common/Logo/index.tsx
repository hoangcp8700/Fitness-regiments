import Heading from '@components/atoms/Heading';
import Text from '@components/atoms/Text';
import { CONSTANT_ROUTE } from '@utils/constants';
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isShowLabel?: boolean;
}

const LogoApp: React.FC<LogoProps> = ({ isShowLabel = true }) => (
  <Link to={CONSTANT_ROUTE.HOME}>
    <Heading className='text-lg lg:text-3xl text-slate-800 dark:text-white'>
      V<span className='text-orange-500'>e</span>lvet Fitness
    </Heading>
    {isShowLabel && (
      <Text className='text-xs -translate-y-1 text-slate-800 dark:text-white'>Unleash Your Inner Potential</Text>
    )}
  </Link>
);

export default LogoApp;
