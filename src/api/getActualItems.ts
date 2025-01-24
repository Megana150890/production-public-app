export type ActualItem = {
	title: string; // Заголовок статьи
	date: string; // Дата публикации
	url: string; // Ссылка на статью
};

export async function getActualItems(): Promise<ActualItem[]> {
	console.log('Fetching actual items...');
	return Promise.resolve([
		{
			title: 'Играл с ручкой, пинал парту',
			date: '2023-11-01',
			url: 'https://takiedela.ru/2023/11/igral-s-ruchkoy-pinal-partu/',
		},
		{
			title: 'Волонтеры помогли в организации марафона',
			date: '2023-10-28',
			url: 'https://takiedela.ru/2023/10/volontery-pomogli-v-marafone/',
		},
		{
			title: 'День благодарности волонтерам в Москве',
			date: '2023-10-15',
			url: 'https://takiedela.ru/2023/10/den-blagodarnosti-volonteram/',
		},
	]);
}
