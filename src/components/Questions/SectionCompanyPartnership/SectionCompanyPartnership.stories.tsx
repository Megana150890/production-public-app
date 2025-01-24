import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SectionCompanyPartnership } from './SectionCompanyPartnership';

const meta = {
  title: 'New/SectionCompanyPartnership',
  component: SectionCompanyPartnership,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    // viewport: {
    // 	defaultViewport: 'desktop',
    // },
  },
  args: {
    companyPartnershipCardProps: [
      {
        title: 'HR-партнерство',
        description: `После создания личного кабинета компании на платформе
         ее сотрудники получают доступ к заданиям от НКО, помогают фондам от имени работодателя. 
         Достижения и активность каждого отображается в Личном кабинете, ведется статистика. 
         Команда ProCharity разрабатывает годовой план по вовлечению сотрудников компании в волонтерство.`,
      },
      {
        title: 'Бонусное партнерство',
        description: `Партнеры также могут поддержать развитие интеллектуального волонтерства,
         даря волонтерам подарки — свою продукцию за выполненные на платформе задания, 
         в статусе Бонусного партнера проекта.`,
      },
      {
        title: 'Финансовая поддержка ProCharity',
        description: `Любая компания может стать Партнером, сделав пожертвование на развитие
         платформы. Средства будут направлены на техническую и коммуникационную поддержку, 
         обучающие мероприятия для НКО и волонтеров, покрытие административных расходов. 
         По итогам года мы публикуем подробный отчет об использовании средств.`,
      },
    ]
  }	
} satisfies Meta<typeof SectionCompanyPartnership>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('SectionCompanyPartnership');
    await expect(element).toBeInTheDocument();
  },
};
