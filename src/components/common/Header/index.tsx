import React from 'react';
import styled from 'styled-components';
import { headerHeight } from '@styles/theme';

import LogoApp from '../Logo';
import ProfileMenu from '../ProfileMenu';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => (
  <header>
    <WrapperHeader className='flex justify-between items-center px-4 shadow-xl'>
      <LogoApp />
      <ProfileMenu />
    </WrapperHeader>
  </header>
);

export default Header;

const WrapperHeader = styled.div`
  height: ${headerHeight}px;
`;
