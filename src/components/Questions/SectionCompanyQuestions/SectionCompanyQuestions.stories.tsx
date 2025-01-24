import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionCompanyQuestions } from './SectionCompanyQuestions';

const meta = {
  title: 'New/SectionCompanyQuestions',
  component: SectionCompanyQuestions,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // viewport: {
    // 	defaultViewport: 'desktop',
    // },
  },
  args: {
    companyFaqCardProps: [
      {
        title: 'Проверяет ли ProCharity фонды?',
        description: 'Спойлер —  да. Рассказываем о нашем механизме контроля',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Что нам важно знать о наших партнерах?',
        description: '10 важных для нас критериев',
        handleCardClick: () => {alert('Клик на карточку')},
      },
      {
        title: 'Как создать и настроить профиль компании?',
        description: 'Разбираем процесс регистрации',
        handleCardClick: () => {alert('Клик на карточку')},
      },
    ]
  }
} satisfies Meta<typeof SectionCompanyQuestions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('SectionCompanyQuestions');
    await expect(element).toBeInTheDocument();
  },
};
