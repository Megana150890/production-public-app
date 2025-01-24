export type Comment = {
	id: string;
	author: {
		name: string;
		avatarUrl: string;
	};
	date: string; // Дата комментария
	content: string; // Содержание комментария
	attachments: Array<{
		name: string;
		url: string;
	}>; // Прикрепленные файлы
	replies: Comment[]; // Ответы на комментарий (древовидная структура)
};

export type TaskCommentsResponse = {
	taskId: string;
	comments: Comment[];
};

// Мок API для получения комментариев по id задачи
export async function getTaskComments(
	taskId: string
): Promise<TaskCommentsResponse> {
	console.log(`Fetching comments for task ID: ${taskId}...`);

	const comments: Comment[] = [
		{
			id: '1',
			author: {
				name: 'Берестнева Галина',
				avatarUrl: '/images/avatar1.jpg',
			},
			date: '11 июля в 12.40',
			content: `Проблема Образа впервые стала намечаться у Барта в «Мифологиях», но там этот термин употреблялся еще слишком широко...`,
			attachments: [
				{
					name: 'Резюме_БерестеневаГА.docx',
					url: '/files/Резюме_БерестеневаГА.docx',
				},
			],
			replies: [
				{
					id: '2',
					author: {
						name: 'Бочкарёва Катя',
						avatarUrl: '/images/avatar2.jpg',
					},
					date: '11 июля в 12.45',
					content:
						'Теоретически осознанная разработка проблемы развернулась в семиотических статьях Барта начала 60-х годов...',
					attachments: [],
					replies: [],
				},
			],
		},
		{
			id: '2',
			author: {
				name: 'Бочкарёва Катя',
				avatarUrl: '/images/avatar2.jpg',
			},
			date: '11 июля в 12.45',
			content:
				'Теоретически осознанная разработка проблемы развернулась в семиотических статьях Барта начала 60-х годов...',
			attachments: [],
			replies: [],
		},
	];

	return Promise.resolve({
		taskId,
		comments,
	});
}
