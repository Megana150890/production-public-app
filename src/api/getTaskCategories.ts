import mockData from "@/routes/PublicRoot/mock";

export type TaskCategory = {
	id: string; // Уникальный идентификатор категории
	name: string; // Название категории
	description: string[]; // Описание категории в виде массива строк
	pendingTasks: number; // Количество задач, ожидающих исполнителя
	iconUrl: string; // иконка категории
};

export async function getTaskCategories(): Promise<TaskCategory[]> {
	console.log('Fetching task categories...');
	return Promise.resolve(mockData.data.taskCategories);
}
