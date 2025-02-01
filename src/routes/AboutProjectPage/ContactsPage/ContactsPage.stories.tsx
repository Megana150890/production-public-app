import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ContactsPage } from './ContactsPage';
import { mockContacts } from './mock';

const meta = {
	title: 'Root/ContactsPage',
	component: ContactsPage,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
} satisfies Meta<typeof ContactsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	args: {
		className: '',
		contacts: mockContacts, 
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('ContactsPage');
		await expect(element).toBeInTheDocument();
	},
};
