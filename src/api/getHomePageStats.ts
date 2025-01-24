import mockData from "@/routes/PublicRoot/mock";

export type StatCategory = {
	id: string; // Уникальный идентификатор категории статистики
	name: string; // Название категории
	value: number; // Значение статистики
};

export type Stats = StatCategory[]; // Массив категорий статистики

export async function getHomePageStats(): Promise<Stats> {
	console.log('Fetching home page statistics...');
	return Promise.resolve(mockData.data.stats);
}
