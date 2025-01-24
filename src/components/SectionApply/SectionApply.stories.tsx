import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionApply } from './SectionApply';

const meta = {
  title: 'Public/Section/SectionApply',
  component: SectionApply,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    viewport: {
    	defaultViewport: 'desktop',
    },
  },
  args: {
    links: {
      volunteer: {
        rules: "#",
        reg: "#",
      },
      fund: {
        rules: "#",
        reg: "#",
      },
    }
  }
} satisfies Meta<typeof SectionApply>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('SectionApply');
    await expect(element).toBeInTheDocument();
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}