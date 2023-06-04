import { sidebarMenus } from '@assets/data/sidebar-menus';
import IconApp from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import { headerHeight, sidebarCollapsed } from '@styles/theme';
import React, { useMemo } from 'react';
import styled from 'styled-components';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const renderMenus = useMemo(
    () =>
      sidebarMenus.map((el) => (
        <div className='flex flex-col items-center gap-y-2 px-4' key={el.label}>
          <IconApp component={el.icon} size={40} />
          <Text>{el.label}</Text>
        </div>
      )),
    [],
  );
  return (
    <aside>
      <WrapperSidebar className='flex flex-col gap-y-4 pt-8 pb-4 shadow-lg'>{renderMenus}</WrapperSidebar>
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
