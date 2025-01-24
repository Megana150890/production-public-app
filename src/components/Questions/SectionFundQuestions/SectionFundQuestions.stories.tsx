import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionFundQuestions } from './SectionFundQuestions';

const meta = {
	title: 'New/SectionFundQuestions',
	component: SectionFundQuestions,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
	args: {
    nkoFaqCardProps: [
      {
        title: 'Каким требованиям должна соответствовать НКО?',
        description: '10 важных для нас критериев',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Откуда в ProCharity приходят волонтёры?',
        description: 'И как мы их проверяем',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как НКО получить доступ к ProCharity?',
        description: 'Разбираем процесс регистрации',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как вести переписку с волонтерами??',
        description: 'Как общаться с волонтёром, чтобы было легко работать',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как работать с задачами?',
        description: 'Публикуем, собираем отклики, выбираем исполнителя',
        handleCardClick: () => {alert('Клик на карточку')},
      },
    ]		
  }
} satisfies Meta<typeof SectionFundQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionFundQuestions');
		await expect(element).toBeInTheDocument();
	},
};
