export type Task = {
	id: string; // Уникальный идентификатор задачи
	category: string; // Категория задачи
	points: number; // Количество баллов
	views: number; // Количество просмотров
	name: string; // Название задачи
	status: 'pending' | 'in_progress' | 'archived' | 'proposals'; // Статус задачи
	organization: {
		logoUrl: string; // URL логотипа организации
		location: string; // Локация организации
		name: string; // Название организации
	};
	deadline: string; // Дата сдачи задания
	responses: number; // Количество откликов
};

export type TaskListResponse = {
	tasks: Task[]; // Список задач
	total: number; // Общее количество задач
};

const generateRandomStatus = ():
	| 'pending'
	| 'in_progress'
	| 'archived'
	| 'proposals' => {
	const statuses: Array<'pending' | 'in_progress' | 'archived' | 'proposals'> =
		['pending', 'in_progress', 'archived', 'proposals'];
	return statuses[Math.floor(Math.random() * statuses.length)];
};

export type TaskFilter = {
	status?: 'pending' | 'in_progress' | 'archived' | 'proposals';
	helpType?: string[]; // ID категорий из dropdown "Чем помочь"
	helpFor?: string[]; // ID категорий из dropdown "Кому помочь"
	search?: string; // Поисковая строка
	onlineOnly?: boolean; // Только онлайн задачи
	sortBy?: 'date' | 'points' | 'deadline'; // Сортировка
	offset?: number; // Смещение для пагинации
	limit?: number; // Лимит для пагинации
};

export async function getTasksWithFilter(
	filter: TaskFilter = {}
): Promise<TaskListResponse> {
	const queryParams = new URLSearchParams();

	if (filter.status) queryParams.append('status', filter.status);
	if (filter.helpType)
		queryParams.append('helpType', filter.helpType.join(','));
	if (filter.helpFor) queryParams.append('helpFor', filter.helpFor.join(','));
	if (filter.search) queryParams.append('search', filter.search);
	if (filter.onlineOnly)
		queryParams.append('onlineOnly', String(filter.onlineOnly));
	if (filter.sortBy) queryParams.append('sortBy', filter.sortBy);
	if (filter.offset) queryParams.append('offset', String(filter.offset));
	if (filter.limit) queryParams.append('limit', String(filter.limit));

	console.log('Fetching tasks with filters:', queryParams.toString());

	// Моки данных
	const allTasks: Task[] = Array.from({ length: 162 }, (_, index) => ({
		id: `task-${index + 1}`,
		category: 'Category',
		points: 1,
		views: 3,
		name: `Task name ${index + 1}`,
		status: generateRandomStatus(),
		organization: {
			logoUrl: '/images/org-logo.svg',
			location: 'Location',
			name: `Organization ${index + 1}`,
		},
		deadline: new Date(2020, 5, 1).toISOString(),
		responses: 1,
	}));

	// Применение фильтров
	let filteredTasks = allTasks;

	if (filter.search?.trim()) {
		filteredTasks = filteredTasks.filter((task) =>
			task.name.toLowerCase().includes(filter.search!.toLowerCase())
		);
	}

	if (filter.status) {
		filteredTasks = filteredTasks.filter(
			(task) => task.status === filter.status
		);
	}

	// Дополнительные фильтры по типу помощи
	if (filter.helpType?.length) {
		filteredTasks = filteredTasks.filter((task) =>
			filter.helpType?.some((type) => task.category === type)
		);
	}

	// Пагинация
	const offset = filter.offset || 0;
	const limit = filter.limit || 12;
	const paginatedTasks = filteredTasks.slice(offset, offset + limit);

	// Возврат данных
	return Promise.resolve({
		tasks: paginatedTasks,
		total: filteredTasks.length,
	});
}
