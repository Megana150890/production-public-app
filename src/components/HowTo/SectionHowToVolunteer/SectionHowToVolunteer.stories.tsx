import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { SectionHowToVolunteer } from './SectionHowToVolunteer';

import markIcon1 from '@/assets/icon-volunteer-HowToWorkStep1.svg';
import markIcon2 from '@/assets/icon-volunteer-HowToWorkStep2.svg';
import markIcon3 from '@/assets/icon-volunteer-HowToWorkStep3.svg';
import markIcon4 from '@/assets/icon-volunteer-HowToWorkStep4.svg';
import markIcon5 from '@/assets/icon-volunteer-HowToWorkStep5.svg';

const meta = {
	title: 'New/SectionHowToVolunteer',
	component: SectionHowToVolunteer,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
	args : {

	}
} satisfies Meta<typeof SectionHowToVolunteer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	args: {
		onClick: fn(),
		volunteerDataHowToWorkSteps: [
			{
				icon: markIcon1,
				text: 'Зарегистрируйтесь на платформе и заполните анкету',
				countStep: 1,
			},
			{
				icon: markIcon2,
				text: 'Дождитесь проверки профиля — обычно это занимает до 2 дней',
				countStep: 2,
			},
			{
				icon: markIcon3,
				text: 'Выбери подходящую задачу и откликнись на неё',
				countStep: 3,
			},
			{
				icon: markIcon4,
				text: 'Не стесняйся задавать вопросы и предлагать новые идеи!',
				countStep: 4,
			},
			{
				icon: markIcon5,
				text: 'Выполняй задачи, получай опыт и бонусы от партнеров',
				countStep: 5,
			},
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionHowToVolunteer');
		await expect(element).toBeInTheDocument();
	},
};
