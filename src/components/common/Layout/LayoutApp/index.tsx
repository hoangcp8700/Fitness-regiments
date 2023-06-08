import Header from '@components/common/Header';
import Sidebar from '@components/common/Sidebar';
import { breakpoints, headerHeight, sidebarBottom, sidebarCollapsed } from '@styles';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';

interface LayoutProps {}

const LayoutDefault: React.FC<LayoutProps> = () => {
  return (
    <Wrapper className='relative'>
      <Header />
      <div>
        <Sidebar />
        <WrapperMainLayout className='bg-white dark:bg-slate-800 '>
          <WrapperMain className='bg-gray-100 dark:bg-slate-500 min-h-[100vh] shadow-xl '>
            <Outlet />
          </WrapperMain>
        </WrapperMainLayout>
      </div>
    </Wrapper>
  );
};

export default LayoutDefault;

const Wrapper = styled.div`
  height: calc(100vh - ${headerHeight}px);
  padding-top: ${headerHeight}px;
  height: 100vh;
`;

const WrapperMain = styled.div`
  padding: 16px;
  border-radius: 16px;
  height: 100%;
`;

export const WrapperMainLayout = styled.main`
  padding: 16px;
  width: calc(100% - ${sidebarCollapsed}px);
  margin-left: auto;
  ${breakpoints.mobileDown(`
  width: 100%;
  padding-bottom: calc(${sidebarBottom}px + 16px);
    `)}
`;
