import type { Meta, StoryFn } from '@storybook/react';

import Select from '.';

const meta = {
  title: 'Components/atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

const Template: StoryFn<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  defaultValue: 'lucy',
  style: { width: 120 },
  // onChange:{handleChange},
  options: [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ],
  bordered: false,
};
