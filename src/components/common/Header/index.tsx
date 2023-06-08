import React from 'react';
import styled from 'styled-components';
import { headerHeight } from '@styles/theme';

import LogoApp from '../Logo';
import ProfileMenu from '../ProfileMenu';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <header className='fixed left-0 right-0 top-0 z-10 bg-white dark:bg-slate-800 duration-300'>
    <WrapperHeader className='flex justify-between items-center px-4'>
      <LogoApp />
      <ProfileMenu />
    </WrapperHeader>
  </header>
);

export default Header;

const WrapperHeader = styled.div`
  height: ${headerHeight}px;
`;
