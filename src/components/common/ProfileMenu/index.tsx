import Avatar from '@components/atoms/Avatar';
import DarkModeToggle from '@components/atoms/DarkModeToggle';
import IconApp, { Icons } from '@components/atoms/Icon';
import MessageNotification from '@components/templates/HeaderMessage';
import HeaderNotification from '@components/templates/HeaderNotification';
import { Dropdown, MenuProps } from 'antd';
import React, { useMemo } from 'react';

interface ProfileMenuProps {}

const ProfileMenu: React.FC<ProfileMenuProps> = () => {
  const items: MenuProps['items'] = useMemo(
    () => [
      {
        key: 'profile',
        icon: <IconApp component={Icons.UserOutlined} size={20} />,
        label: 'Profile',
        className: '!py-2 gap-x-3',
      },
      {
        key: 'change-password',
        icon: <IconApp component={Icons.KeyOutlined} size={20} />,
        label: 'Change Password',
        className: '!py-2 gap-x-3',
      },
      {
        key: 'logout',
        icon: <IconApp component={Icons.LogoutOutlined} size={20} />,
        label: 'Logout',
        className: '!py-2 gap-x-3',
      },
    ],
    [],
  );
  return (
    <div className='flex items-center gap-x-6'>
      <DarkModeToggle />
      <MessageNotification />
      <HeaderNotification />
      <Dropdown menu={{ items }} placement='bottomLeft' arrow={{ pointAtCenter: true }}>
        <Avatar size={40} alt='Hoang Cong Phan' rootClassName='cursor-pointer' />
      </Dropdown>
    </div>
  );
};
export default ProfileMenu;
