import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { SectionHowToFund } from './SectionHowToFund';

import markIcon1 from '@/assets/icon-nko-HowToWorkStep1.svg';
import markIcon2 from '@/assets/icon-nko-HowToWorkStep2.svg';
import markIcon3 from '@/assets/icon-nko-HowToWorkStep3.svg';
import markIcon4 from '@/assets/icon-nko-HowToWorkStep4.svg';
import markIcon5 from '@/assets/icon-nko-HowToWorkStep5.svg';

const meta = {
	title: 'New/SectionHowToFund',
	component: SectionHowToFund,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
	args : {

	}
} satisfies Meta<typeof SectionHowToFund>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	args: {
		onClick: fn(),
		nkoDataHowToWorkSteps: [
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
				text: 'Создайте задание и ждите откликов от волонтеров',
				countStep: 3,
			},
			{
				icon: markIcon4,
				text: 'Выберите подходящего волонтера исполнителем задания и напишите ему',
				countStep: 4,
			},
			{
				icon: markIcon5,
				text: 'Обсудите с волонтером все детали работы и ждите результат',
				countStep: 5,
			},
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionHowToFund');
		await expect(element).toBeInTheDocument();
	},
};
