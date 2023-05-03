import { keyExpected } from '@utils/functions/format';
import React, { forwardRef } from 'react';

import { ScheduleItemWrapperProps } from '../utils/types';
import { StyledWrapper } from '../styled';

import ScheduleItem from './ScheduleItem';

const ScheduleMonthRef: React.ForwardRefRenderFunction<HTMLDivElement, ScheduleItemWrapperProps> = (
  { active, isCollapsed, scheduleData, totalCountDay = 30, onClick },
  ref,
) => {
  return (
    <StyledWrapper ref={ref} isCollapsed={isCollapsed}>
      {new Array(totalCountDay).fill(true).map((_, idx) => (
        <ScheduleItem
          label={`Day ${idx + 1}`}
          key={keyExpected(idx, 'schedule-month-item')}
          className='w-[76px] md:w-[84px]'
          active={active === idx}
          status={scheduleData && scheduleData[idx].status}
          onClick={() => onClick && onClick(idx)}
        />
      ))}
    </StyledWrapper>
  );
};
const ScheduleMonth = forwardRef(ScheduleMonthRef);
export default ScheduleMonth;
