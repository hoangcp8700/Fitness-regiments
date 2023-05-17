import type { Meta, StoryFn } from '@storybook/react';

import ExerciseDetail from '.';

const meta = {
  title: 'Components/templates/ExerciseDetail',
  component: ExerciseDetail,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ExerciseDetail>;

export default meta;

const Template: StoryFn<typeof ExerciseDetail> = (args) => {
  return <ExerciseDetail {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
