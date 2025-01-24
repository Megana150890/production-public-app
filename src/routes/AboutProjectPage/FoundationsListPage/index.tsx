import {
	FoundationFilter,
	getFoundationsWithFilter,
} from '@/api/getFoundationsWithFilter';
import { parseInteger, validateHelpFor } from '@/api/utils';
import React, { lazy, Suspense } from 'react';
import { LoaderFunctionArgs } from 'react-router';

const LazyFoundationsListPage = lazy(() =>
	import('./FoundationsListPage').then((module) => ({
		default: module.FoundationsListPage,
	}))
);

const FoundationsListPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyFoundationsListPage {...props} />
		</Suspense>
	);
};

// Вспомогательная функция для проверки сортировки для Foundations
function validateFoundationsSortBy(
	value: string | null
): 'registrationDate' | 'closedTasks' | 'activeTasks' | 'name' | undefined {
	const validSortBy: (
		| 'registrationDate'
		| 'closedTasks'
		| 'activeTasks'
		| 'name'
	)[] = ['registrationDate', 'closedTasks', 'activeTasks', 'name'];
	return validSortBy.includes(
		value as 'registrationDate' | 'closedTasks' | 'activeTasks' | 'name'
	)
		? (value as 'registrationDate' | 'closedTasks' | 'activeTasks' | 'name')
		: undefined;
}

async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);

	const filters: FoundationFilter = {
		helpFor: validateHelpFor(url.searchParams.get('helpFor')), // Проверка фильтра "Кому помочь?"
		search: url.searchParams.get('search') || undefined,
		sortBy: validateFoundationsSortBy(url.searchParams.get('sortBy')), // Проверка сортировки
		offset: parseInteger(url.searchParams.get('offset')), // Преобразование в число
		limit: parseInteger(url.searchParams.get('limit')),
	};

	const foundations = await getFoundationsWithFilter(filters); // Мок API для получения Foundations с фильтрами
	return { foundations };
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	element: <FoundationsListPage />,
};
