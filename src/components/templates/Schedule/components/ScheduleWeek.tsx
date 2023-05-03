import useDevices from '@hooks/useDevices';
import { CONSTANTS } from '@utils/constants';
import React, { useCallback, forwardRef } from 'react';

import { StyledWrapper } from '../styled';
import { ScheduleItemWrapperProps } from '../utils/types';

import ScheduleItem from './ScheduleItem';

const ScheduleWeekRef: React.ForwardRefRenderFunction<HTMLDivElement, ScheduleItemWrapperProps> = (
  { active, isCollapsed, scheduleData, onClick },
  ref,
) => {
  const { isMobile } = useDevices();

  const formatWeekLabelInMobile = useCallback(
    (value: string) => (!isMobile ? value : value.substring(0, 3)),
    [isMobile],
  );
  return (
    <StyledWrapper isCollapsed={isCollapsed} ref={ref}>
      {CONSTANTS.DATE.dayOfWeek.map((el, idx) => (
        <ScheduleItem
          active={active === idx}
          label={formatWeekLabelInMobile(el)}
          key={el}
          className='w-[76px] md:w-[120px]'
          status={scheduleData && scheduleData[idx].status}
          onClick={() => onClick && onClick(idx)}
        />
      ))}
    </StyledWrapper>
  );
};

const ScheduleWeek = forwardRef(ScheduleWeekRef);
export default ScheduleWeek;
