import { sidebarMenus } from '@assets/data/sidebar-menus';
import IconApp from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import { breakpoints } from '@styles/breakpoints';
import { headerHeight, sidebarBottom, sidebarCollapsed } from '@styles/theme';
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
                'flex flex-col items-center gap-y-2 py-2 px-8 sm:mx-2 transition-all cursor-pointer sm:rounded-xl group hover:bg-gray-100 dark:hover:bg-slate-500 hover:opacity-100',
                active ? 'bg-gray-200 dark:bg-slate-500' : 'opacity-50',
              )}
            >
              <IconApp
                component={el.icon}
                size={28}
                className={clsx(
                  'group-hover:text-danger dark:group-hover:text-orange-400',
                  active ? 'text-danger dark:text-orange-400' : 'text-slate-900 dark:text-white',
                )}
              />
              <Text
                className={clsx(
                  'group-hover:text-danger dark:group-hover:text-orange-400',
                  active ? 'text-danger dark:text-orange-400' : 'text-slate-900 dark:text-white',
                )}
              >
                {el.label}
              </Text>
            </div>
          </Link>
        );
      }),
    [pathname],
  );
  return (
    <aside>
      <WrapperSidebar className='relative z-10 flex flex-row sm:flex-col sm:gap-y-3  sm:pt-4 sm:pb-4 bg-white dark:bg-slate-800'>
        {renderMenus}
      </WrapperSidebar>
    </aside>
  );
};

export default Sidebar;

interface WrapperSidebarStyle {
  isCollapsed?: boolean;
}

const WrapperSidebar = styled.aside<WrapperSidebarStyle>`
  position: fixed;
  width: ${({ isCollapsed }) => (isCollapsed ? 0 : sidebarCollapsed)}px;
  height: calc(100vh - ${headerHeight}px);
  ${breakpoints.mobileDown(`
      width:100%;
      bottom:0;
      height: ${sidebarBottom}px;
      a {
        flex:1;
      }
  `)}
`;
