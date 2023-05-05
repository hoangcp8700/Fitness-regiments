import { Meta, StoryFn } from '@storybook/react';

import Player from '.';

export default {
  title: 'Components/organisms/Player',
  component: Player,
  argTypes: {},
} satisfies Meta<typeof Player>;

const Template: StoryFn<typeof Player> = (args) => <Player {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  poster: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
  options: {
    debug: true,
    disableContextMenu: true,
    tooltips: {
      controls: true,
      seek: true,
    },
    captions: {
      active: true,
    },
    mediaMetadata: {
      title: 'View Test',
      album: 'Sports',
      artist: 'Brainfarm',
      artwork: [
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
          type: 'image/jpeg',
        },
      ],
    },
    markers: {
      enabled: true,
      points: [
        {
          time: 10,
          label: 'first marker',
        },
        {
          time: 20,
          label: 'second marker',
        },
        {
          time: 30,
          label: '<strong>third</strong> marker',
        },
      ],
    },
  },
  source: {
    type: 'video',
    sources: [
      {
        src: 'y17RuWkWdn8',
        provider: 'youtube',
      },
    ],
  },
};
