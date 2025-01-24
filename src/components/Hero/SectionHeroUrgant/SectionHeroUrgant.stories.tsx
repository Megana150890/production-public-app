import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { SectionHeroUrgant } from './SectionHeroUrgant';

const meta = {
	title: 'Public/Hero/SectionHeroUrgant',
	component: SectionHeroUrgant,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
	args: {
		onPlay: fn()
	}
} satisfies Meta<typeof SectionHeroUrgant>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	args: {},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionHeroUrgant');
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
