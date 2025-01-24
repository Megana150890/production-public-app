// Тип данных для детальной задачи
export type TaskDetails = {
	id: string;
	status: 'pending' | 'in_progress' | 'archived' | 'proposals';
	points: number;
	category: string;
	title: string;
	description: {
		targetAudience: string;
		presentationGoals: string;
		pageCountAndSections: string;
		technicalRequirements: string;
		format: string;
		brandStyle: string;
		letterRequirements: string;
	};
	deadline: string; // Дата сдачи
	createdAt: string; // Дата создания
	organization: {
		logoUrl: string;
		location: string;
		name: string;
	};
	files: Array<{
		name: string;
		size: number; // Размер в Кб
	}>;
	links: Array<{
		name: string;
		url: string;
	}>;
	bonus: string[]; // Массив строк для бонуса
	responses: number;
};

// Генерация мок данных для детальной задачи
export async function getTaskDetails(taskId: string): Promise<TaskDetails> {
	console.log(`Fetching details for task ID: ${taskId}...`);

	const taskDetails: TaskDetails = {
		id: taskId,
		status: 'pending', // Состояние задачи
		points: 1, // Количество баллов
		category: 'Соцсети, презентации', // Категория задачи
		title:
			'Создание дизайна презентации для привлечения партнеров и финансовой помощи', // Заголовок
		description: {
			targetAudience:
				'Необходимо сделать дизайн презентации для потенциальных партнеров.',
			presentationGoals: 'Оказание организационной и финансовой помощи.',
			pageCountAndSections: '10 слайдов.',
			technicalRequirements: 'Google Презентация.',
			format: 'Живое выступление.',
			brandStyle: 'С ним вы можете ознакомится на нашем сайте.',
			letterRequirements:
				'Прикрепите портфолио. В произнесении нет места науке; я-люблю-тебя не относится ни к лингвистике, ни к семиологии. Его инстанцией (тем, исходя из чего о нем можно говорить) будет скорее Музыка.',
		}, // Структурированное описание задачи
		deadline: '2023-07-23T00:00:00Z', // Дата сдачи
		createdAt: '2023-07-23T00:00:00Z', // Дата создания
		organization: {
			logoUrl: '/images/org-logo.svg', // Логотип организации
			location: 'Location', // Местоположение организации
			name: 'Organization name', // Название организации
		},
		files: [
			{
				name: 'Текст для презентации',
				size: 135, // Размер файла в Кб
			},
			{
				name: 'Презентация для примера',
				size: 135, // Размер файла в Кб
			},
		],
		links: [
			{
				name: 'Наш фирменный стиль',
				url: 'http://example.com/brand-style', // Ссылка на фирменный стиль
			},
			{
				name: 'Референс',
				url: 'http://example.com/reference', // Ссылка на референс
			},
		],
		bonus: [
			'Благодарственное письмо в электронном виде', // Массив бонусов
		],
		responses: 1, // Количество откликов
	};

	return Promise.resolve(taskDetails);
}
