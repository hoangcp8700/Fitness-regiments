import { Avatar } from 'antd';
import React from 'react';
import { getAvatarName } from '@utils/functions/getAvatarName';
import clsx from 'clsx';

import { AvatarProps } from '../types';

interface AvatarNameProps extends AvatarProps {
  name?: string;
  labelClassName?: string;
  isHorizontal?: boolean;
}

export const AvatarName: React.FC<AvatarNameProps> = ({ name, isHorizontal = true, labelClassName, ...props }) => (
  <div className={clsx('flex items-center gap-2', isHorizontal ? 'flex-row' : 'flex-col w-fit')}>
    <Avatar {...props}>{getAvatarName(name)}</Avatar>
    <span className={labelClassName}>{name}</span>
  </div>
);
