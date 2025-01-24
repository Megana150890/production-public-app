export type VolunteerOfTheMonth = {
	lastName: string; // Фамилия
	firstName: string; // Имя
	extra: string; // Дополнительная информация (например, что-то особенное о волонтере)
};

export async function getVolunteersOfTheMonth(): Promise<
	VolunteerOfTheMonth[]
> {
	console.log('Fetching volunteers of the month...');
	return Promise.resolve([
		{
			lastName: 'Иванова',
			firstName: 'Мария',
			extra: 'Активный волонтер в проекте помощи детям',
		},
		{
			lastName: 'Петров',
			firstName: 'Александр',
			extra: 'Участвовал в организации крупных событий',
		},
		{
			lastName: 'Сидорова',
			firstName: 'Елена',
			extra: 'Руководила волонтерской группой в лагере',
		},
	]);
}
