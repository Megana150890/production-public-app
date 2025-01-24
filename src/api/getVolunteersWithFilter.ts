export type Volunteer = {
	id: string;
	avatar: string;
	name: string;
	location: string;
	projectParticipation: string; // Например, "Участник проекта 2 года"
	lastVisit: string; // Например, "3 января 2024"
	completedTasks: number; // Число выполненных задач
};

export type VolunteerFilter = {
	helpType?: string[]; // Чем помочь? (dropdown, checkbox)
	search?: string; // Поиск по ключевым словам
	sortBy?: 'registrationDate' | 'closedTasks' | 'lastVisitDate' | 'name'; // Сортировка
	offset?: number; // Пагинация
	limit?: number; // Пагинация
};

const mockVolunteers: Volunteer[] = [
	{
		id: '1',
		avatar: 'https://example.com/avatar1.jpg',
		name: 'Берестнева Галина',
		location: 'Москва',
		projectParticipation: 'Участник проекта 2 года',
		lastVisit: '3 января 2024',
		completedTasks: 35,
	},
	{
		id: '2',
		avatar: 'https://example.com/avatar2.jpg',
		name: 'Иванов Сергей',
		location: 'Санкт-Петербург',
		projectParticipation: 'Участник проекта 1 год',
		lastVisit: '25 декабря 2023',
		completedTasks: 15,
	},
	{
		id: '3',
		avatar: 'https://example.com/avatar3.jpg',
		name: 'Алексеева Ольга',
		location: 'Новосибирск',
		projectParticipation: 'Участник проекта 3 года',
		lastVisit: '1 января 2024',
		completedTasks: 50,
	},
];

export async function getVolunteersWithFilter(
	filter: VolunteerFilter = {}
): Promise<Volunteer[]> {
	const queryParams = new URLSearchParams();

	if (filter.helpType)
		queryParams.append('helpType', filter.helpType.join(','));
	if (filter.search) queryParams.append('search', filter.search);
	if (filter.sortBy) queryParams.append('sortBy', filter.sortBy);
	if (filter.offset) queryParams.append('offset', String(filter.offset));
	if (filter.limit) queryParams.append('limit', String(filter.limit));

	console.log('Fetching volunteers with filters:', queryParams.toString());

	// Фильтрация
	let filteredVolunteers = mockVolunteers;

	if (filter.search?.trim()) {
		filteredVolunteers = filteredVolunteers.filter((volunteer) =>
			volunteer.name.toLowerCase().includes(filter.search!.toLowerCase())
		);
	}

	// Пагинация
	if (filter.offset && filter.limit) {
		filteredVolunteers = filteredVolunteers.slice(
			filter.offset,
			filter.offset + filter.limit
		);
	}

	return Promise.resolve(filteredVolunteers);
}
