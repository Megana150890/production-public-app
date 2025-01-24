import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { FoundationsRegistrationPage } from './FoundationsRegistrationPage';

const meta = {
	title: 'Root/FoundationsRegistrationPage',
	component: FoundationsRegistrationPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
} satisfies Meta<typeof FoundationsRegistrationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('FoundationsRegistrationPage');
		await expect(element).toBeInTheDocument();
	},
};
