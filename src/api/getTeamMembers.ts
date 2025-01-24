export type TeamMember = {
	id: string;
	name: string;
	surname: string;
	position: string;
	avatarUrl: string;
};

export type TeamResponse = TeamMember[];

export async function getTeamMembers(params: {
	tab?: 'procharity' | 'development' | 'volunteers';
	limit?: number;
	offset?: number;
}): Promise<TeamResponse> {
	const { tab, limit, offset } = params;

	console.log(
		`Fetching team members${tab ? ` for ${tab} tab` : ''}${limit ? ` with limit ${limit}` : ''}${
			offset ? ` and offset ${offset}` : ''
		}...`
	);

	const teamData: {
		[key in 'procharity' | 'development' | 'volunteers']: TeamMember[];
	} = {
		procharity: [
			{
				id: '1',
				name: 'Зульфия',
				surname: 'Миннетдинова',
				position: 'Руководитель проекта',
				avatarUrl: '/images/team/zulfia.jpg',
			},
			{
				id: '2',
				name: 'Катерина',
				surname: 'Бриль',
				position: 'Продакт-менеджер',
				avatarUrl: '/images/team/katya.jpg',
			},
		],
		development: [
			{
				id: '5',
				name: 'Виктор',
				surname: 'Рыжков',
				position: 'Frontend Developer',
				avatarUrl: '/images/team/victor.jpg',
			},
		],
		volunteers: [
			{
				id: '7',
				name: 'Алексей',
				surname: 'Иванов',
				position: 'Волонтер',
				avatarUrl: '/images/team/alexey.jpg',
			},
		],
	};

	let data = tab
		? teamData[tab]
		: [...teamData.procharity, ...teamData.development, ...teamData.volunteers];

	if (typeof offset === 'number') data = data.slice(offset);
	if (typeof limit === 'number') data = data.slice(0, limit);

	return Promise.resolve(data);
}
