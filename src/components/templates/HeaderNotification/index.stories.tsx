import type { Meta, StoryFn } from '@storybook/react';

import HeaderNotification from '.';

const meta = {
  title: 'Components/templates/HeaderNotification',
  component: HeaderNotification,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HeaderNotification>;

export default meta;

const Template: StoryFn<typeof HeaderNotification> = (args) => {
  return <HeaderNotification {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
