import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { MemoryRouter } from 'react-router';
import { FoundationsPage } from './FoundationsPage';

const meta = {
	title: 'Root/FoundationsPage',
	component: FoundationsPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	], // Добавлено
} satisfies Meta<typeof FoundationsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('FoundationsPage');
		await expect(element).toBeInTheDocument();
	},
};
