import Header from '@components/common/Header';
import Sidebar from '@components/common/Sidebar';
import { headerHeight } from '@styles/theme';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';

interface LayoutProps {}

const LayoutDefault: React.FC<LayoutProps> = () => (
  <>
    <Header />
    <div className='flex'>
      <Sidebar />
      <WrapperMainLayout>
        <Outlet />
      </WrapperMainLayout>
    </div>
  </>
);

export default LayoutDefault;

export const WrapperMain = styled.div`
  padding: 16px;
  min-height: calc(100vh - ${headerHeight}px - 32px);
  border-radius: 16px;
`;

export const WrapperMainLayout = styled.main`
  padding: 16px;
  width: 100%;
  height: calc(100vh - ${headerHeight}px);
  overflow-y: auto;
`;
