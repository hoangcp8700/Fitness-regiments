import type { Meta, StoryFn } from '@storybook/react';
import { scheduleOptions, ScheduleTimeValueEnum } from '@assets/data/schedule';
import { useState } from 'react';
import { randomEnumValue } from '@utils/functions/format';

import { StatusSchedule } from './utils/types';

import Schedule from '.';

const meta = {
  title: 'Components/templates/Schedule',
  component: Schedule,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Schedule>;

export default meta;

const Template: StoryFn<typeof Schedule> = () => {
  const [data, setData] = useState(scheduleOptions[0].value);

  const isWeek = data === ScheduleTimeValueEnum.ByWeek;

  const scheduleData = new Array(isWeek ? 7 : 31)
    .fill(true)
    .map((_, idx) => ({ index: idx, status: randomEnumValue(StatusSchedule) }));

  return (
    <div className='md:max-w-[55%]'>
      <Schedule
        value={data}
        onChangeType={setData}
        onChangeSchedule={(index, isWeekValue) => console.log('index', index, isWeekValue)}
        options={scheduleOptions}
        isWeek={isWeek}
        scheduleData={scheduleData}
      />
      <div>
        <h1>content</h1>
      </div>
    </div>
  );
};

console.log(111, typeof StatusSchedule);
export const Primary = Template.bind({});
Primary.args = {};
