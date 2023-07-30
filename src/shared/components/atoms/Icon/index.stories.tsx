import type { Meta, StoryFn } from '@storybook/react';

import Icon from '.';

const meta = {
  title: 'Components/atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

const Template: StoryFn<typeof Icon> = (args) => {
  return <Icon {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
