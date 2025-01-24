import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { SectionFundHistories } from './SectionFundHistories';

import pic1nko from '@/assets/nko_rusdog.png';
import pic2nko from '@/assets/nko_lavka_radostei.png';
import pic3nko from '@/assets/nko_ya_tebya_slishu.png';
import pic4nko from '@/assets/nko_spina_biffida.png';

const meta = {
	title: 'New/SectionFundHistories',
	component: SectionFundHistories,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
	args: {}
} satisfies Meta<typeof SectionFundHistories>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
	args: {
		onClick: fn(),
		nkoCardsData: [
			{
				image: pic1nko,
				category: 'Москва',
				name: 'РусДог',
				info: 'Заголовок',
				description: `Мы знакомы с ProCharity 2 года. Это наша
				 первая платформа интеллектуального волонтёрства. Регистрация и модерация прошли быстро. 
				 Но сначала было сложно довериться стороннему волонтёру. А теперь ProCharity — незаменимый помощник 
				 в решении наших задач: от консультации бухгалтера до помощи дизайнера.`,
			},
			{
				image: pic2nko,
				category: 'Москва',
				name: 'Лавка Радостей',
				info: 'Заголовок',
				description: `Спасибо вам, что на этой платформе вы собираете настоящих профессионалов.
				 Это большое подспорье для некоммерческих организаций. Мы сталкиваемся в своей работе со многими вопросами, 
				 которые с вашей помощью решают специалисты из разных областей.`,
			},
			{
				image: pic3nko,
				category: 'Санкт-Петербург',
				name: 'Я тебя слышу',
				info: 'Заголовок',
				description: `Мария — суперволонтер, профессионал и человек. Она невероятно помогла нам в разработке курса,
				 который получился четким, структурированным, понятным и красивым. 
				 Мария вышла за рамки задания и помогла нам организовать первые групповые встречи с нашими благополучателями, 
				 поддерживала нас, давала советы, помогала и была рядом. Спасибо огромное!`,
			},
			{
				image: pic4nko,
				category: 'Москва',
				name: 'Спина бифида',
				info: 'Заголовок',
				description: `Благотворительный фонд «Спина бифида» выражает искреннюю благодарность волонтёру Наталии за помощь
				 в вёрстке методического пособия для кандидатов в приёмные родители. Благодаря этому пособию будущие приёмные родители 
				 получат пошаговую инструкцию на пути к усыновлению ребёнка с диагнозом «спина бифида». Задача была выполнена в срок, 
				 профессионально и качественно. Наталия проявляла творческую инициативу и прислушивалась к пожеланиям. Большое спасибо!`,
			},
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionFundHistories');
		await expect(element).toBeInTheDocument();
	},
};
