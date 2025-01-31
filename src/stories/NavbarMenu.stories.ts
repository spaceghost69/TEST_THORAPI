import type { Meta, StoryObj } from '@storybook/react';

import { NavbarMenuComponent } from './NavbarMenu';

const meta = {
  title: 'Percival the Dragon Slayer/NavbarMenu',
  component: NavbarMenuComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  }
} satisfies Meta<typeof NavbarMenuComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const ArtistLanding: Story = {};
