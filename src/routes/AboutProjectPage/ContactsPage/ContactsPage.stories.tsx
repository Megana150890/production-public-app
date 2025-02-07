import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { ContactsPage } from './ContactsPage';


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
		data: {
			contacts: [
				{
					title: 'Адрес',
					description: 'Москва, Арбат 35, здание «Дом Актера»',
				},
				{
					title: 'Электронная почта',
					email: 'procharity@friends-foundation.com',
				},
				{
					title: 'По вопросам трудоустройства',
					email: 'friends@friends-foundation.com',
				},
				{
					title: 'По вопросам сотрудничества',
					description:
						'Алиса Петрова, руководитель направления партнерских проектов',
					email: 'a.petrova@friends-foundation.com',
				},
				{
					title: 'Для СМИ',
					description: 'Елена Самсонова, PR-директор',
					email: 'e.samsonova@friends-foundation.com',
				},
			],
		},
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('ContactsPage');
		await expect(element).toBeInTheDocument();
	},
};
