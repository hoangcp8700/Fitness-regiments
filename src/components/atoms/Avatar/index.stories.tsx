import type { Meta, StoryFn } from '@storybook/react';

import Avatar from '.';

const meta = {
  title: 'Components/atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;

const Template: StoryFn<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

const Template2: StoryFn<typeof Avatar.AvatarName> = (args) => {
  return <Avatar.AvatarName {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  size: 64,
  alt: 'mr adam',
  src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};

export const Secondary = Template2.bind({});
Secondary.args = {
  size: 64,
  // src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  name: 'Adam Store',
  isHorizontal: false,
};
