import type { Meta, StoryFn } from '@storybook/react';

import Heading from '.';

const meta = {
  title: 'Components/atoms/Heading',
  component: Heading,
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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

const Template: StoryFn<typeof Heading> = (args) => {
  return <Heading {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Dummy Heading',
  className: 'text-red-500',
};
