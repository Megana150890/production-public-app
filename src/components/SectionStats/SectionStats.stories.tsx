import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionStats } from './SectionStats';

const meta = {
  title: 'New/SectionStats',
  component: SectionStats,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // viewport: {
    // 	defaultViewport: 'desktop',
    // },
  },
  args: {
    values: [
      {	counter: 2222, description: 'выполненных задания'},
      {	counter: 2222, description: 'выполненных задания'},
      {	counter: 2222, description: 'выполненных задания'},
      {	counter: 2222, description: 'выполненных задания'},
      {	counter: 2222, description: 'выполненных задания'},
    ]
  }
} satisfies Meta<typeof SectionStats>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('SectionStats');
    await expect(element).toBeInTheDocument();
  },
};
