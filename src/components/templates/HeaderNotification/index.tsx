import IconApp, { Icons } from '@components/atoms/Icon';
import { Badge, Popover } from 'antd';
import React from 'react';

interface HeaderNotificationProps {
  children?: React.ReactNode;
}

const HeaderNotificationMain: React.FC = () => <div>notification list</div>;

const HeaderNotification: React.FC<HeaderNotificationProps> = () => (
  <Popover content={<HeaderNotificationMain />}>
    <Badge dot>
      <IconApp component={Icons.NotificationBell} />
    </Badge>
  </Popover>
);

export default HeaderNotification;
