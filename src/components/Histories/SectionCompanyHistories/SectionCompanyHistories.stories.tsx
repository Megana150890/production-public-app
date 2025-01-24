import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionCompanyHistories } from './SectionCompanyHistories';

import pic1company from '@/assets/company_biocad.png'
import pic2company from '@/assets/nko_lavka_radostei.png'

const meta = {
	title: 'New/SectionCompanyHistories',
	component: SectionCompanyHistories,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
	args: {
    companyCardsData: [
      {
        image: pic1company,
        category: 'Москва',
        name: 'BIOCAD',
        description: `Очень рады сотрудничеству с командой фонда Друзья и платформы ProCharity!
				 После присоединения к платформе увидели большой интерес корпоративных волонтёров к теме Probono. 
				 Разнообразие заданий и легких вход на ProCharity позволяет волонтерам BIOCAD значительно увеличить количество добрых дел.`,
      },
      {
        image: pic2company,
        category: 'Москва',
        name: 'Лавка Радостей',
        info: 'Заголовок',
        description: `Спасибо вам, что на этой платформе вы собираете настоящих профессионалов.
				 Это большое подспорье для некоммерческих организаций. Мы сталкиваемся в своей работе со многими вопросами, 
				 которые с вашей помощью решают специалисты из разных областей.`,
      },
    ]
  }
} satisfies Meta<typeof SectionCompanyHistories>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionCompanyHistories');
		await expect(element).toBeInTheDocument();
	},
};
