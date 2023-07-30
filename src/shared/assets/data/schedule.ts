export enum ScheduleTimeEnum {
  'ByWeek' = 'By Week',
  'ByMonth' = 'By Month',
}
export enum ScheduleTimeValueEnum {
  'ByWeek' = 'by-week',
  'ByMonth' = 'by-month',
}
export const scheduleOptions = [
  {
    label: ScheduleTimeEnum.ByWeek,
    value: ScheduleTimeValueEnum.ByWeek,
  },
  {
    label: ScheduleTimeEnum.ByMonth,
    value: ScheduleTimeValueEnum.ByMonth,
  },
];
