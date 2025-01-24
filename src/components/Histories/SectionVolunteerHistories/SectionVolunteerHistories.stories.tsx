import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, within } from '@storybook/test';

import { SectionVolunteerHistories } from './SectionVolunteerHistories';

import pic1 from '@/assets/volonter_van_ekker.png';
import pic2 from '@/assets/volonter_obuhova_a.png';

const meta = {
  title: 'New/SectionVolunteerHistories',
  component: SectionVolunteerHistories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // viewport: {
    // 	defaultViewport: 'desktop',
    // },
  },
  args: {

  }
} satisfies Meta<typeof SectionVolunteerHistories>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Default: Story = {
  args: {
    onClick: fn(),
    volunteerCardsData: [
      {
        image: pic1,
        category: 'Москва',
        name: 'Саша',
        surname: 'Ван Эккер',
        info: 'SMM для детей-сирот',
        link: '#',
        description: `Написал тексты про мечты подопечных НКО «Мелодия счастья» и помог 
          получить им профессию. Волонтерством занимается с детства, последние 5 лет — 
          это интеллектуальная помощь. За это время Саша решил 115 задач и дважды стал 
          обладателем премии ProCharity.`,
      },
      {
        image: pic2,
        category: 'Брюссель',
        name: 'Анастасия',
        surname: 'Обухова',
        info: 'Дизайн без границ',
        link: '#',
        description: `Интеллектуальное волонтерство открыла для себя в 2018 году. С момента 
          регистрации на платформе выполнила 131 задание в области графического дизайна: 
          брендбуки, афиши, дизайн сайтов, годовые отчёты. Часть из них — после переезда в Бельгию.`,
      },
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('SectionVolunteerHistories');
    await expect(element).toBeInTheDocument();
  },
};
