import { ScheduleTimeValueEnum } from '@assets/data/schedule';

export interface ScheduleDataProps {
  scheduleData?: {
    index: number;
    status?: StatusSchedule;
  }[];
}
export interface ScheduleProps extends ScheduleDataProps {
  options?: OptionType[];
  value: ScheduleTimeValueEnum;
  isWeek?: boolean;
  onChangeType?: (value: ScheduleTimeValueEnum) => void;
  onChangeSchedule?: (index: number, isWeek?: boolean) => void;
}

export interface ScheduleItemProps {
  label: string | number;
  status?: StatusSchedule;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface ScheduleItemWrapperProps extends ScheduleDataProps {
  isCollapsed?: boolean;
  active?: number;
  totalCountDay?: number;
  onClick?: (index: number) => void;
}

export enum StatusSchedule {
  'Active' = 'active',
  'Progress' = 'progress',
  'Close' = 'close',
  'None' = 'none',
}
