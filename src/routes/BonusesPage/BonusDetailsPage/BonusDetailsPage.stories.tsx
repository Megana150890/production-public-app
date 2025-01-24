import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { BonusDetailsPage } from './BonusDetailsPage';

const meta = {
	title: 'Root/BonusDetailsPage',
	component: BonusDetailsPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
} satisfies Meta<typeof BonusDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('BonusDetailsPage');
		await expect(element).toBeInTheDocument();
	},
};
