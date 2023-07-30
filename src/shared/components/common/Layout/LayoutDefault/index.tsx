import { breakpoints, sidebarBottom, sidebarCollapsed } from '@styles';
import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { sidebarMenus } from '@assets/data/sidebar-menus';

interface LayoutProps {}

const LayoutDefault: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const locationArr = location.pathname?.split('/');

  const key = useMemo(() => locationArr[locationArr.length - 1], [locationArr]);
  const pageIndex = useMemo(
    () => sidebarMenus.findIndex((el) => location.pathname.includes(el.path)),
    [location.pathname],
  );

  return (
    <WrapperMainLayout className='bg-white dark:bg-slate-800 p-4 overflow-hidden min-h-[100vh]'>
      <motion.div
        key={key}
        initial={{ width: 20, height: 20, x: -250, y: pageIndex === 0 ? -240 : 120 * pageIndex, scale: 0 }}
        animate={{ width: '100%', height: '100%', x: 0, y: 0, scale: 1, opacity: 1 }}
        exit={{ width: 20, height: 20, x: -250, y: pageIndex === 0 ? -240 : 120 * pageIndex, scale: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <WrapperMain className='bg-gray-100 dark:bg-slate-500 min-h-[100vh] shadow-xl '>
          <Outlet />
        </WrapperMain>
      </motion.div>
    </WrapperMainLayout>
  );
};

export default LayoutDefault;
const WrapperMain = styled.div`
  padding: 16px;
  border-radius: 16px;
  height: 100%;
`;

export const WrapperMainLayout = styled.main`
  width: calc(100% - ${sidebarCollapsed}px);
  margin-left: auto;
  ${breakpoints.mobileDown(`
  width: 100%;
  padding-bottom: calc(${sidebarBottom}px + 16px);
    `)}
`;
