import type { Meta, StoryFn } from '@storybook/react';

import HeaderMessage from '.';

const meta = {
  title: 'Components/templates/HeaderMessage',
  component: HeaderMessage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderMessage>;

export default meta;

const Template: StoryFn<typeof HeaderMessage> = (args) => {
  return <HeaderMessage {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
