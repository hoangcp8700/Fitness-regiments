import type { Meta, StoryFn } from '@storybook/react';

import Text from '.';

const meta = {
  title: 'Components/atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    type: {
      options: ['p', 'span', 'div'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

const Template: StoryFn<typeof Text> = (args) => {
  return <Text {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'span',
  children: 'Dummy Text',
  className: 'text-red-500',
};
