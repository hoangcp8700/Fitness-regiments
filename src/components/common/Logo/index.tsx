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
    <Heading className='text-md'>
      V<span className='text-red-500'>e</span>lvet Fitness
    </Heading>
    {isShowLabel && <Text className='text-xs -translate-y-1'>Unleash Your Inner Potential</Text>}
  </Link>
);

export default LogoApp;
