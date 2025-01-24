import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { RegistrationPage } from './RegistrationPage';

const meta = {
	title: 'Root/RegistrationPage',
	component: RegistrationPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
} satisfies Meta<typeof RegistrationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByText('RegistrationPage');
		await expect(element).toBeInTheDocument();
	},
};
