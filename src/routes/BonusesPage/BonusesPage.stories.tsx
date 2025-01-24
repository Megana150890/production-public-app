import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { MemoryRouter } from 'react-router';

import { BonusesPage } from './BonusesPage';

const meta = {
	title: 'Root/BonusesPage',
	component: BonusesPage,
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
} satisfies Meta<typeof BonusesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('BonusesPage');
		await expect(element).toBeInTheDocument();
	},
};
