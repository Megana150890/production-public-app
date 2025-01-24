import {
	getVolunteersWithFilter,
	VolunteerFilter,
} from '@/api/getVolunteersWithFilter';
import { parseInteger, validateHelpType } from '@/api/utils';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyVolunteersListPage = lazy(() =>
	import('./VolunteersListPage').then((module) => ({
		default: module.VolunteersListPage,
	}))
);

const VolunteersListPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyVolunteersListPage {...props} />
		</Suspense>
	);
};

// Вспомогательная функция для проверки сортировки для волонтеров
function validateVolunteerSortBy(
	value: string | null
): 'registrationDate' | 'closedTasks' | 'lastVisitDate' | 'name' | undefined {
	const validSortBy: (
		| 'registrationDate'
		| 'closedTasks'
		| 'lastVisitDate'
		| 'name'
	)[] = ['registrationDate', 'closedTasks', 'lastVisitDate', 'name'];
	return validSortBy.includes(
		value as 'registrationDate' | 'closedTasks' | 'lastVisitDate' | 'name'
	)
		? (value as 'registrationDate' | 'closedTasks' | 'lastVisitDate' | 'name')
		: undefined;
}

async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);

	const filters: VolunteerFilter = {
		helpType: validateHelpType(url.searchParams.get('helpType')), // Проверка фильтра "Чем помочь?"
		search: url.searchParams.get('search') || undefined,
		sortBy: validateVolunteerSortBy(url.searchParams.get('sortBy')), // Проверка сортировки
		offset: parseInteger(url.searchParams.get('offset')), // Преобразование в число
		limit: parseInteger(url.searchParams.get('limit')),
	};

	const volunteers = await getVolunteersWithFilter(filters); // Мок API для получения волонтеров с фильтрами
	return { volunteers };
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <VolunteersListPage />,
};
