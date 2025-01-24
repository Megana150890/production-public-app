import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { MemoryRouter } from 'react-router';
import { PublicRoot } from './PublicRoot';
import mockData from "./mock.ts";

const meta = {
	title: 'APP/STATIC/PublicRoot',
	component: PublicRoot,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
	args: mockData,
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	], // Добавлено
} satisfies Meta<typeof PublicRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('PublicRoot');
		await expect(element).toBeInTheDocument();
	},
};
