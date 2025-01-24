import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionVolunteerMotivation } from './SectionVolunteerMotivation';

import imageDodoPizza from "@/assets/img_dodo_pizza.png";
import imageAzbuka from "@/assets/img_azbuca_atticus.png";
import imageBbe from "@/assets/img_bbe_library.png";

const meta = {
	title: 'New/SectionVolunteerMotivation',
	component: SectionVolunteerMotivation,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		// viewport: {
		// 	defaultViewport: 'desktop',
		// },
	},
	args : {
		bonusCardProps: [
			{
				logo: imageDodoPizza,
				caption: "Додокоины в Додо Пицца",
				category: "Кафе и рестораны",
				points: 2,
				onClickCard: () => alert("Клик по карточке Default"),
			},
			{
				logo: imageAzbuka,
				caption: "Промокод на книги",
				category: "Книги",
				points: 5,
				onClickCard: () => alert("Клик по карточке Default"),
			},
			{
				logo: imageBbe,
				caption: "Доступ к дизайн-библиотеке на месяц",
				category: "Образование",
				points: 8,
				onClickCard: () => alert("Клик по карточке Default"),
			},
		]
	}
} satisfies Meta<typeof SectionVolunteerMotivation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SectionVolunteerMotivation');
		await expect(element).toBeInTheDocument();
	},
};
