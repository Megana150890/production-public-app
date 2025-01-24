import mockData from "@/routes/PublicRoot/mock";

export type PartnerData = {
	id: string; // Уникальный идентификатор
	name: string; // Название партнера
	duration: string; // Срок участия в проекте
	helpedFunds: number; // Количество фондов, которым помогли
	completedTasks: number; // Количество выполненных задач
	imageUrl: string; // лого или аватар
};

export type PartnersResponse = {
	companies: PartnerData[]; // Компании
	volunteers: PartnerData[]; // Волонтеры
	nko: PartnerData[]; // НКО (некоммерческие организации)
};

export async function getPartners(params: {
	tab?: 'companies' | 'volunteers' | 'nko';
	limit?: number;
	offset?: number;
}): Promise<PartnersResponse> {
	const { tab, limit, offset } = params;

	console.log(
		`Fetching partners${tab ? ` for ${tab} tab` : ''}${limit ? ` with limit ${limit}` : ''}${
			offset ? ` and offset ${offset}` : ''
		}...`
	);

	const partnerData: PartnersResponse = mockData.data.partners;

	// Если tab указан, фильтруем только по нему, остальные делаем пустыми массивами
	const filteredData: PartnersResponse = {
		companies: tab === 'companies' || !tab ? partnerData.companies.slice() : [],
		volunteers:
			tab === 'volunteers' || !tab ? partnerData.volunteers.slice() : [],
		nko: tab === 'nko' || !tab ? partnerData.nko.slice() : [],
	};

	// Применяем limit и offset
	Object.keys(filteredData).forEach((key) => {
		const dataKey = key as keyof PartnersResponse;
		let data = filteredData[dataKey];
		if (typeof offset === 'number') data = data.slice(offset);
		if (typeof limit === 'number') data = data.slice(0, limit);
		filteredData[dataKey] = data;
	});

	return Promise.resolve(filteredData);
}
