export type Foundation = {
	id: string;
	name: string; // Краткое название организации
	avatar: string;
	projectParticipation: string; // Например, "Участник проекта 2 года"
	tasksWaiting: number; // Задач, ждут исполнителей
	tasksClosed: number; // Задач закрыто
};

export type FoundationFilter = {
	helpFor?: string[]; // Кому помочь? (dropdown, checkbox)
	search?: string; // Поиск по ключевым словам
	sortBy?: 'registrationDate' | 'closedTasks' | 'activeTasks' | 'name'; // Сортировка
	offset?: number; // Пагинация
	limit?: number; // Пагинация
};

const mockFoundations: Foundation[] = [
	{
		id: '1',
		name: 'Фонд "Друзья"',
		avatar: 'https://example.com/avatar1.jpg',
		projectParticipation: 'Участник проекта 2 года',
		tasksWaiting: 35,
		tasksClosed: 9999,
	},
	{
		id: '2',
		name: 'Фонд "Надежда"',
		avatar: 'https://example.com/avatar2.jpg',
		projectParticipation: 'Участник проекта 1 год',
		tasksWaiting: 20,
		tasksClosed: 500,
	},
	{
		id: '3',
		name: 'Фонд "Будущее"',
		avatar: 'https://example.com/avatar3.jpg',
		projectParticipation: 'Участник проекта 3 года',
		tasksWaiting: 10,
		tasksClosed: 1500,
	},
];

export async function getFoundationsWithFilter(
	filter: FoundationFilter = {}
): Promise<Foundation[]> {
	const queryParams = new URLSearchParams();

	if (filter.helpFor) queryParams.append('helpFor', filter.helpFor.join(','));
	if (filter.search) queryParams.append('search', filter.search);
	if (filter.sortBy) queryParams.append('sortBy', filter.sortBy);
	if (filter.offset) queryParams.append('offset', String(filter.offset));
	if (filter.limit) queryParams.append('limit', String(filter.limit));

	console.log('Fetching Foundations with filters:', queryParams.toString());

	// Фильтрация
	let filteredFoundations = mockFoundations;

	if (filter.search?.trim()) {
		filteredFoundations = filteredFoundations.filter((foundation) =>
			foundation.name.toLowerCase().includes(filter.search!.toLowerCase())
		);
	}

	// Пагинация
	if (filter.offset && filter.limit) {
		filteredFoundations = filteredFoundations.slice(
			filter.offset,
			filter.offset + filter.limit
		);
	}

	return Promise.resolve(filteredFoundations);
}
