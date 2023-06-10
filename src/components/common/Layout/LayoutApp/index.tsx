import Header from '@components/common/Header';
import Sidebar from '@components/common/Sidebar';
import { headerHeight } from '@styles';
import React from 'react';
import styled from 'styled-components';
import './index.css';
import { AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutDefault: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper className='relative'>
      <Header />
      <Sidebar />
      <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        {children}
      </AnimatePresence>
    </Wrapper>
  );
};

export default LayoutDefault;

const Wrapper = styled.div`
  height: calc(100vh - ${headerHeight}px);
  padding-top: ${headerHeight}px;
  height: 100vh;
`;
