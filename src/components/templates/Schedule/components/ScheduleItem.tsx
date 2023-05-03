import IconApp, { Icons } from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import { BaseColors } from '@styles/theme';
import { Button } from 'antd';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { scheduleItemClassActive } from '../utils/constants';
import { ScheduleItemProps, StatusSchedule } from '../utils/types';

interface EleStyleProps {
  bgColor?: string;
  icon?: React.ReactNode;
  color?: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ className, label, status, active, onClick }) => {
  const renderStatusEle = useMemo(() => {
    let ele: EleStyleProps;

    switch (status) {
      case StatusSchedule.Active:
        ele = {
          color: BaseColors.light,
          bgColor: BaseColors.green,
          icon: <IconApp component={Icons.CheckCircleOutlined} fill={BaseColors.white} />,
        };
        break;
      case StatusSchedule.Progress:
        ele = {
          bgColor: BaseColors.blue,
          color: BaseColors.light,
          icon: <IconApp component={Icons.FieldTimeOutlined} fill={BaseColors.white} />,
        };
        break;
      case StatusSchedule.Close:
        ele = {
          bgColor: BaseColors.red2,
          color: BaseColors.light,
          icon: <IconApp component={Icons.CloseCircleOutlined} fill={BaseColors.white} />,
        };
        break;
      default:
        ele = {
          bgColor: BaseColors.gray,
          icon: (
            <div
              className={clsx(
                'w-4 h-4 mt-1 rounded-full transition-colors duration-300',
                active ? 'bg-blue-400' : 'bg-gray-400',
              )}
            />
          ),
        };
        break;
    }

    return (
      <StyledWrapper
        bgColor={ele.bgColor}
        className={clsx(
          'flex items-center flex-col relative gap-2 rounded-xl p-2 min-h-[80px] cursor-pointer hover:scale-105 before:content-[""] before:absolute before:w-3 before:h-3 before:rounded-full before:-top-1 before:-right-1 before:bg-red-600 before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out',
          active && `before:opacity-100 ${scheduleItemClassActive}`,
          className,
        )}
        onClick={onClick}
      >
        <StyledText color={ele.color} type='span' className='text-sm md:text-md'>
          {label}
        </StyledText>
        {ele.icon}
      </StyledWrapper>
    );
  }, [status, className, active, onClick, label]);

  return renderStatusEle;
};

const StyledWrapper = styled(Button)<EleStyleProps>`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
  margin: 0;
  & > span {
    margin-inline-start: 0 !important;
  }
`;
const StyledText = styled(Text)<EleStyleProps>`
  color: ${({ color }) => color};
`;

export default ScheduleItem;
