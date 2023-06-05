import type { Meta, StoryFn } from '@storybook/react';

import DarkModeToggle from '.';

const meta = {
  title: 'Components/atoms/DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DarkModeToggle>;

export default meta;

const Template: StoryFn<typeof DarkModeToggle> = (args) => {
  return <DarkModeToggle {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
