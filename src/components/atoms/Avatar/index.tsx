import { withProperties } from '@utils/functions/withProperties';
import { Avatar as AvatarApp } from 'antd';
import React, { useState } from 'react';
import { AntDesignOutlined } from '@ant-design/icons';

import { AvatarName } from './components';
import { AvatarProps } from './types';

export const AvatarMain: React.FC<AvatarProps> = ({ children, alt, ...props }) => {
  const [isError, setIsError] = useState(false);
  return (
    <AvatarApp
      {...props}
      {...(isError && {
        icon: <AntDesignOutlined />,
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
