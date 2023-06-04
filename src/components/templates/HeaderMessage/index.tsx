import IconApp, { Icons } from '@components/atoms/Icon';
import { Badge, Popover } from 'antd';
import React from 'react';

interface HeaderMessageProps {
  children?: React.ReactNode;
}

const HeaderMessageMain: React.FC = () => <div>message list</div>;

const HeaderMessage: React.FC<HeaderMessageProps> = () => (
  <Popover content={<HeaderMessageMain />}>
    <Badge dot>
      <IconApp component={Icons.MessageOutlined} />
    </Badge>
  </Popover>
);

export default HeaderMessage;
