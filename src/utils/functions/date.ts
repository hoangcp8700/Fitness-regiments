import { CONSTANTS } from '@utils/constants';

export const dayOfWeekAsString = (dayIndex: number) => {
  return CONSTANTS.DATE.dayOfWeek[dayIndex] || '';
};
