import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { CompanyDetailsPage } from './CompanyDetailsPage';

const meta = {
	title: 'Root/CompanyDetailsPage',
	component: CompanyDetailsPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
} satisfies Meta<typeof CompanyDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('CompanyDetailsPage');
		await expect(element).toBeInTheDocument();
	},
};
