import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionVolunteerQuestions } from './SectionVolunteerQuestions';

const meta = {
  title: 'New/SectionVolunteerQuestions',
  component: SectionVolunteerQuestions,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // viewport: {
    // 	defaultViewport: 'desktop',
    // },
  },
  args: {
    faqCardProps: [
      {
        title: 'Проверяет ли ProCharity фонды?',
        description: 'Спойлер —  да. Рассказываем о нашем механизме контроля',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как заполнить профиль и начать помогать?',
        description: '5 советов по самопрезентации волонтёра',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как вести переписку с представителями НКО?',
        description: 'Как общаться с заказчиком, чтобы было легко работать',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как начисляются баллы?',
        description: 'И что можно за них получить',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как начисляются баллы?',
        description: 'И что можно за них получить',
        handleCardClick: () => {alert('Клик на карточку')},
      },
    ]		
  }
} satisfies Meta<typeof SectionVolunteerQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('SectionVolunteerQuestions');
    await expect(element).toBeInTheDocument();
  },
};
