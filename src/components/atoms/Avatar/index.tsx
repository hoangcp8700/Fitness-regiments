import { withProperties } from '@utils/functions/withProperties';
import { Avatar as AvatarApp } from 'antd';
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';

import { AvatarName } from './components';
import { AvatarProps } from './types';

export const AvatarMain: React.FC<AvatarProps> = ({ children, src, alt, ...props }) => {
  const [isError, setIsError] = useState(false);
  return (
    <AvatarApp
      {...props}
      {...((!src || isError) && {
        icon: <UserOutlined className='dark:text-white' />,
      })}
      alt={alt}
      onError={() => {
        setIsError(true);
        return true;
      }}
    >
      {children}
    </AvatarApp>
  );
};

const Avatar = withProperties(AvatarMain, {
  AvatarName,
});

export default Avatar;
