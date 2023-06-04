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
  hoverFill?: string;
  size?: number;
}
const IconApp: React.FC<IconAppProps> = ({ component, fill, hoverFill, size = 24 }) => (
  <StyledIcon component={component} fill={fill} hoverFill={hoverFill} size={size} />
);

const StyledIcon = styled(Icon)<IconAppProps>`
  vertical-align: baseline;
  span {
    vertical-align: baseline;
  }
  svg {
    transition: all 0.3s ease-in-out;
    fill: ${({ fill }) => fill};
    font-size: ${({ size }) => `${size}px`};
    &:hover {
      fill: ${({ hoverFill }) => hoverFill};
    }
  }
`;
export default IconApp;
