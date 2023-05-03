import { scrollbarCSS } from '@styles/scrollbar';
import styled from 'styled-components';

type StyledScheduleItemWrapperProps = {
  isCollapsed?: boolean;
};

export const StyledWrapperInit = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0 16px;
  ${scrollbarCSS}
`;

export const StyledWrapper = styled(StyledWrapperInit)<StyledScheduleItemWrapperProps>`
  flex-wrap: ${({ isCollapsed }) => (isCollapsed ? 'wrap' : 'no-wrap')};
  ${({ isCollapsed }) =>
    isCollapsed
      ? `
    position: absolute;
    max-height: 220px;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-color: #fff;
    ${scrollbarCSS}
  `
      : {}}
`;
