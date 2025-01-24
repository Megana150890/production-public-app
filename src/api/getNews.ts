export type NewsItem = {
	id: string; // Уникальный идентификатор
	title: string; // Заголовок новости
	date: string; // Дата публикации в формате YYYY-MM-DD
	imageUrl: string; // URL изображения
};

export type NewsResponse = NewsItem[];
export async function getProjectNews({
	limit = 10,
	offset = 0,
	category = 'blog', // Новое поле для таба
}: {
	limit?: number;
	offset?: number;
	category?: 'blog' | 'webinars';
} = {}): Promise<NewsResponse> {
	console.log(
		`Fetching news for category: ${category}, limit: ${limit}, offset: ${offset}`
	);
	return Promise.resolve(
		category === 'blog'
			? [
					{
						id: 'volunteer-to-staff',
						title:
							'Из волонтеров в штатные сотрудники: как фонд ОРБИ нашёл юриста на ProCharity',
						date: '2023-02-06',
						imageUrl: '/images/news/orbi-lawyer.jpg',
					},
					{
						id: 'rule-of-life',
						title:
							'«Правило жизни — быть полезным миру»: как волонтер из Москвы помог детям-сиротам из Астрахани',
						date: '2022-12-16',
						imageUrl: '/images/news/moscow-volunteer.jpg',
					},
				]
			: [
					{
						id: 'webinar-1',
						title: 'Как организовать волонтерскую поддержку онлайн?',
						date: '2023-03-01',
						imageUrl: '/images/news/webinar-1.jpg',
					},
					{
						id: 'webinar-2',
						title: 'Эффективное взаимодействие с фондами через вебинары',
						date: '2023-04-10',
						imageUrl: '/images/news/webinar-2.jpg',
					},
				]
	);
}
