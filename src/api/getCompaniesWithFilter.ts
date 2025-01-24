export type Company = {
	id: string;
	name: string; // Краткое название компании
	avatar: string;
	projectParticipation: string; // Например, "Участник проекта 2 года"
	fundsHelped: number; // Количество фондов, которым помогли
	completedTasks: number; // Число выполненных задач
};

export type CompanyFilter = {
	helpType?: string[]; // Чем помочь? (dropdown, checkbox)
	search?: string; // Поиск по ключевым словам
	sortBy?: 'registrationDate' | 'closedTasks' | 'fundsHelped' | 'name'; // Сортировка
	offset?: number; // Пагинация
	limit?: number; // Пагинация
};

const mockCompanies: Company[] = [
	{
		id: '1',
		name: 'Компания "ЭкоПомощь"',
		avatar: 'https://example.com/avatar1.jpg',
		projectParticipation: 'Участник проекта 2 года',
		fundsHelped: 35,
		completedTasks: 9999,
	},
	{
		id: '2',
		name: 'Компания "ТехноПроект"',
		avatar: 'https://example.com/avatar2.jpg',
		projectParticipation: 'Участник проекта 1 год',
		fundsHelped: 20,
		completedTasks: 500,
	},
	{
		id: '3',
		name: 'Компания "Солидарность"',
		avatar: 'https://example.com/avatar3.jpg',
		projectParticipation: 'Участник проекта 3 года',
		fundsHelped: 10,
		completedTasks: 1500,
	},
];

export async function getCompaniesWithFilter(
	filter: CompanyFilter = {}
): Promise<Company[]> {
	const queryParams = new URLSearchParams();

	if (filter.helpType)
		queryParams.append('helpType', filter.helpType.join(','));
	if (filter.search) queryParams.append('search', filter.search);
	if (filter.sortBy) queryParams.append('sortBy', filter.sortBy);
	if (filter.offset) queryParams.append('offset', String(filter.offset));
	if (filter.limit) queryParams.append('limit', String(filter.limit));

	console.log('Fetching companies with filters:', queryParams.toString());

	// Фильтрация
	let filteredCompanies = mockCompanies;

	if (filter.search?.trim()) {
		filteredCompanies = filteredCompanies.filter((company) =>
			company.name.toLowerCase().includes(filter.search!.toLowerCase())
		);
	}

	// Пагинация
	if (filter.offset && filter.limit) {
		filteredCompanies = filteredCompanies.slice(
			filter.offset,
			filter.offset + filter.limit
		);
	}

	return Promise.resolve(filteredCompanies);
}
