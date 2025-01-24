export type NewsDetails = {
	id: string; // Уникальный идентификатор
	title: string; // Заголовок
	date: string; // Дата публикации в формате YYYY-MM-DD
	category: string; // Категория (например, "Анонс")
	summary: string; // Краткое описание
	content: string; // Подробный текст
	imageUrl: string; // URL изображения
	author: {
		avatarUrl: string; // URL аватара автора
		fullName: string; // Полное имя автора
		extra: string; // Дополнительная информация об авторе
	};
};

export async function getNewsDetails(newsId: string): Promise<NewsDetails> {
	// тут может прийти slug или id новости
	console.log(`Fetching details for news ID: ${newsId}...`);

	// Возвращаем моки данных
	return Promise.resolve({
		id: newsId,
		title:
			'Очень длинный заголовок новости в несколько строк описывающий содержание и имена героев',
		date: '2023-07-23',
		category: 'Анонс',
		summary:
			'Волонтер Саша Ван Эккер за 5 лет решил 115 задач на платформе ProСharity. Аудит социальных сетей, интервью, фотосессии подопечных, копирайтинг тестов и многое другое. Герой ProСharity рассказал о том, почему помогать – это важно.',
		content:
			'Издательская группа «Азбука-Аттикус» благодарит волонтеров ProCharity и дарит любые три книги «Азбуки», «Иностранки» или «Махаона» из имеющихся в наличии.',
		imageUrl: '/images/news/volunteer-sasha.jpg',
		author: {
			avatarUrl: '/images/authors/sasha-van-ecker.jpg',
			fullName: 'Саша Ван Эккер',
			extra: '115 задач за 5 лет',
		},
	});
}
