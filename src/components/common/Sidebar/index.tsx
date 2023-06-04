import { sidebarMenus } from '@assets/data/sidebar-menus';
import IconApp from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import { BaseColors, headerHeight, sidebarCollapsed } from '@styles/theme';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation();
  const renderMenus = useMemo(
    () =>
      sidebarMenus.map((el) => {
        const active = pathname.includes(el.path);
        return (
          <Link key={el.label} to={el.path}>
            <div
              className={clsx(
                'flex flex-col items-center gap-y-2 py-2 px-4 transition-all cursor-pointer hover:bg-gray-100 hover:opacity-100',
                active ? 'bg-gray-200' : 'opacity-50',
              )}
            >
              <IconApp component={el.icon} size={32} fill={active ? BaseColors.danger : BaseColors.violet} />
              <Text className={clsx(active && 'text-danger')}>{el.label}</Text>
            </div>
          </Link>
        );
      }),
    [pathname],
  );
  return (
    <aside>
      <WrapperSidebar className='flex flex-col pt-8 pb-4 shadow-lg'>{renderMenus}</WrapperSidebar>
    </aside>
  );
};

export default Sidebar;

interface WrapperSidebarStyle {
  isCollapsed?: boolean;
}

const WrapperSidebar = styled.aside<WrapperSidebarStyle>`
  width: ${({ isCollapsed }) => (isCollapsed ? 0 : sidebarCollapsed)}px;
  height: calc(100vh - ${headerHeight}px);
`;
