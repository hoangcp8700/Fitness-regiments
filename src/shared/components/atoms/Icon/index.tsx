import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';
import * as IconsApp from '@ant-design/icons';
import styled from 'styled-components';

import * as IconSvg from './components';

export const Icons = {
  ...IconsApp,
  ...IconSvg,
};

interface IconAppProps {
  component:
    | React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | React.ForwardRefExoticComponent<any>;
  fill?: string;
  size?: number;
  className?: string;
}
const IconApp: React.FC<IconAppProps> = ({ component, size = 24, className }) => (
  <StyledIcon component={component} size={size} className={className} />
);

const StyledIcon = styled(Icon)<IconAppProps>`
  vertical-align: baseline;
  span {
    vertical-align: baseline;
  }
  svg {
    transition: all 0.3s ease-in-out;
    font-size: ${({ size }) => `${size}px`};
  }
`;
export default IconApp;
