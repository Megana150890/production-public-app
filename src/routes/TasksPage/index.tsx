import {
	getTasksWithFilter,
	TaskFilter,
} from '@/api/getTasksWithFilter';
import { parseInteger, validateHelpFor, validateHelpType } from '@/api/utils';
import React, { lazy, Suspense } from 'react';
import { LoaderFunctionArgs } from 'react-router';

const LazyTasksPage = lazy(() =>
	import('./TasksPage').then((module) => ({
		default: module.TasksPage,
	}))
);

const TasksPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyTasksPage {...props} />
		</Suspense>
	);
};

// Вспомогательная функция для проверки статуса
function validateStatus(
	value: string | null
): TaskFilter['status'] | undefined {
	const validStatuses: TaskFilter['status'][] = [
		'pending',
		'in_progress',
		'archived',
		'proposals',
	];
	return validStatuses.includes(value as TaskFilter['status'])
		? (value as TaskFilter['status'])
		: undefined;
}

// Вспомогательная функция для проверки сортировки
function validateSortBy(
	value: string | null
): TaskFilter['sortBy'] | undefined {
	const validSortBy: TaskFilter['sortBy'][] = ['date', 'points', 'deadline'];
	return validSortBy.includes(value as TaskFilter['sortBy'])
		? (value as TaskFilter['sortBy'])
		: undefined;
}

async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);

	const filters: TaskFilter = {
		status: validateStatus(url.searchParams.get('status')), // Проверка статуса
		helpType: validateHelpType(url.searchParams.get('helpType')), // Проверка фильтра "Чем помочь?"
		helpFor: validateHelpFor(url.searchParams.get('helpFor')), // Проверка фильтра "Кому помочь?"
		search: url.searchParams.get('search') || undefined,
		onlineOnly: url.searchParams.get('onlineOnly') === 'true',
		sortBy: validateSortBy(url.searchParams.get('sortBy')), // Проверка сортировки
		offset: parseInteger(url.searchParams.get('offset')), // Безопасное преобразование в число
		limit: parseInteger(url.searchParams.get('limit')),
	};

	const taskCategories = await getTasksWithFilter(filters);
	return { taskCategories };
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	element: <TasksPage />,
};
