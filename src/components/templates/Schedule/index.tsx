import Heading from '@components/atoms/Heading';
import { Button, DatePicker, DatePickerProps, Select } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { handleScrollXCenter, handleScrollYCenter } from '@utils/functions/styles/scroll';
import IconApp, { Icons } from '@components/atoms/Icon';
import clsx from 'clsx';
import dayjs from 'dayjs';

import { monthFormatSchedule, scheduleItemClassActive, weekFormatSchedule } from './utils/constants';
import { ScheduleProps } from './utils/types';
import { ScheduleMonth, ScheduleWeek } from './components';

const Schedule: React.FC<ScheduleProps> = ({
  options,
  isWeek,
  value,
  scheduleData,
  onChangeType,
  onChangeSchedule,
}) => {
  const [active, setActive] = useState<number | undefined>(undefined);
  const [countDay, setCountDay] = useState<number | undefined>(undefined);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const ref = useRef<HTMLDivElement>(null);

  // SCROLL ITEM WHEN ACTIVE CHANGED
  useEffect(() => {
    if (active) {
      if (isCollapsed) {
        handleScrollYCenter(ref, `.${scheduleItemClassActive}`);
      } else {
        handleScrollXCenter(ref, `.${scheduleItemClassActive}`);
      }
    }
  }, [active, isCollapsed]);

  // RESET ACTIVE
  useEffect(() => {
    setActive(undefined);
  }, [isWeek]);

  const renderContent = useMemo(() => {
    const props = {
      ref,
      scheduleData,
      isCollapsed,
      active,
      onClick: (index: number) => {
        setActive(index);
        if (onChangeSchedule) {
          onChangeSchedule(index, isWeek);
        }
      },
    };
    return isWeek ? <ScheduleWeek {...props} /> : <ScheduleMonth {...props} totalCountDay={countDay} />;
  }, [scheduleData, isCollapsed, active, isWeek, countDay, onChangeSchedule]);

  const renderIconCollapsed = useMemo(() => {
    return isCollapsed ? (
      <IconApp component={Icons.AppstoreOutlined} size={18} />
    ) : (
      <IconApp component={Icons.BuildOutlined} size={18} />
    );
  }, [isCollapsed]);

  const onToggleCollapsed = () => {
    setIsCollapsed((prev) => !prev);
  };

  const onChangeDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
    if (!isWeek) {
      setCountDay(dayjs(dateString).daysInMonth());
    }
    console.log(date, dateString);
  };

  const renderPickerType = isWeek ? 'week' : 'month';

  const formatWeek: DatePickerProps['format'] = (date) =>
    `${dayjs(date).startOf('week').format(weekFormatSchedule)} ~ ${dayjs(date)
      .endOf('week')
      .format(weekFormatSchedule)}`;
  const renderFormat = isWeek ? formatWeek : monthFormatSchedule;

  return (
    <div>
      <div className='flex justify-between items-center gap-x-4 gap-y-2 flex-wrap sm:flex-nowrap mb-4'>
        <Heading>Schedule</Heading>
        <div className='flex items-center gap-x-2'>
          <DatePicker
            defaultValue={dayjs()}
            format={renderFormat}
            onChange={onChangeDatePicker}
            picker={renderPickerType}
          />
          <Select options={options} value={value} onChange={onChangeType} />
          <Button icon={renderIconCollapsed} onClick={onToggleCollapsed} />
        </div>
      </div>

      <div className={clsx('relative', isCollapsed && 'h-[100px]')}>{renderContent}</div>
    </div>
  );
};

export default Schedule;
