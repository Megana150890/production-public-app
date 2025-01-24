import { PublicRootProps } from '@/routes/PublicRoot/PublicRoot.tsx';


export default {
	data: {
		stats: [
			{
				id: 'completedTasks',
				name: 'Задачи выполнено за месяц',
				value: 249,
			},
			{
				id: 'pendingTasks',
				name: 'Задачи ждут волонтеров',
				value: 53,
			},
			{
				id: 'fundsSeekingSpecialists',
				name: 'Фонды ищут специалистов',
				value: 882,
			},
			{
				id: 'registeredVolunteers',
				name: 'Волонтеры зарегистрированы',
				value: 3877,
			},
			{
				id: 'partnerCompanies',
				name: 'Компании-партнеры',
				value: 43,
			},
		],
		taskCategories: [
			{
				id: 'design',
				name: 'Дизайн',
				description: [
					'Полиграфия',
					'Фирменный стиль и логотипы',
					'Иллюстрации',
					'Анимация',
					'3D-графика',
					'UX/UI',
				],
				pendingTasks: 15,
				iconUrl: '/images/icons/design-icon.svg', // Иконка для категории Дизайн
			},
			{
				id: 'marketing',
				name: 'Маркетинг',
				description: [
					'Email-рассылки',
					'Соцсети',
					'Реклама',
					'Событийный и стратегический маркетинг',
				],
				pendingTasks: 15,
				iconUrl: '/images/icons/marketing-icon.svg', // Иконка для категории Маркетинг
			},
			{
				id: 'translations',
				name: 'Переводы',
				description: [
					'Английский',
					'Немецкий',
					'Французский',
					'Испанский',
					'Иврит',
					'Жестовый',
				],
				pendingTasks: 15,
				iconUrl: '/images/icons/translations-icon.svg', // Иконка для категории Переводы
			},
			{
				id: 'it',
				name: 'IT',
				description: [
					'Аудит и создание сайтов',
					'Чат-боты',
					'IT-поддержка',
					'Аналитика',
				],
				pendingTasks: 15,
				iconUrl: '/images/icons/it-icon.svg', // Иконка для категории IT
			},
			{
				id: 'photo_video',
				name: 'Фото и видео',
				description: ['Съемка', 'Монтаж', 'Обработка фото и видео'],
				pendingTasks: 15,
				iconUrl: '/images/icons/photo-video-icon.svg', // Иконка для категории Фото и видео
			},
			{
				id: 'education',
				name: 'Обучение',
				description: ['Курсы', 'Тренинги', 'Образовательные программы'],
				pendingTasks: 285, // Успешно выполненные задачи
				iconUrl: '/images/icons/education-icon.svg', // Иконка для категории Обучение
			},
			{
				id: 'finance',
				name: 'Финансы и фандрайзинг',
				description: [
					'Бухгалтерия',
					'Привлечение финансирования',
					'Поиск спонсоров',
				],
				pendingTasks: 15,
				iconUrl: '/images/icons/finance-icon.svg', // Иконка для категории Финансы
			},
			{
				id: 'management',
				name: 'Менеджмент',
				description: ['Управление проектами', 'Организация мероприятий'],
				pendingTasks: 15,
				iconUrl: '/images/icons/management-icon.svg', // Иконка для категории Менеджмент
			},
			{
				id: 'hr',
				name: 'HR',
				description: ['Профориентация', 'Работа с персоналом'],
				pendingTasks: 15,
				iconUrl: '/images/icons/hr-icon.svg', // Иконка для категории HR
			},
			{
				id: 'legal',
				name: 'Юридические услуги',
				description: [
					'Консультации',
					'Составление документов',
					'Правовая поддержка',
				],
				pendingTasks: 15,
				iconUrl: '/images/icons/legal-icon.svg', // Иконка для категории Юридические услуги
			},
			{
				id: 'consulting',
				name: 'Стратегический консалтинг',
				description: ['Консалтинг', 'Менторство', 'Стратегическое планирование'],
				pendingTasks: 15,
				iconUrl: '/images/icons/consulting-icon.svg', // Иконка для категории Консалтинг
			},
			{
				id: 'creativity',
				name: 'Творчество',
				description: [
					'Театральное и изобразительное искусство',
					'Музыка',
					'Спорт',
					'Танцы',
					'Туризм',
					'Кулинария и пр.',
				],
				pendingTasks: 300, // Успешно выполненные задачи
				iconUrl: '/images/icons/creativity-icon.svg', // Иконка для категории Творчество
			},
			{
				id: 'texts',
				name: 'Тексты',
				description: ['Копирайтинг', 'Аудит и редактирование контента'],
				pendingTasks: 15,
				iconUrl: '/images/icons/texts-icon.svg', // Иконка для категории Тексты
			},
			{
				id: 'other',
				name: 'Другое',
				description: ['Обзвоны', 'Рассылки', 'Работа с информацией'],
				pendingTasks: 15,
				iconUrl: '/images/icons/other-icon.svg', // Иконка для категории Другое
			},
		],
		partners: {
			companies: [
				{
					id: 'tbank',
					name: 'Т-Банк',
					duration: '5 лет',
					helpedFunds: 61,
					completedTasks: 112,
					imageUrl: '/images/partners/tbank.jpg',
				},
				{
					id: 'vk',
					name: 'VK',
					duration: '4 года',
					helpedFunds: 56,
					completedTasks: 162,
					imageUrl: '/images/partners/vk.jpg',
				},
			],
			volunteers: [
				{
					id: 'john_doe',
					name: 'Джон Доу',
					duration: '3 года',
					helpedFunds: 48,
					completedTasks: 136,
					imageUrl: '/images/volunteers/john-doe.jpg',
				},
			],
			nko: [
				{
					id: 'green_earth',
					name: 'Green Earth',
					duration: '5 лет',
					helpedFunds: 0,
					completedTasks: 85,
					imageUrl: '/images/nko/green-earth.jpg',
				},
			],
		}
	}
} as PublicRootProps;