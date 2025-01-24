import {
	CompanyFilter,
	getCompaniesWithFilter,
} from '@/api/getCompaniesWithFilter';
import { parseInteger, validateHelpType } from '@/api/utils';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyCompaniesListPage = lazy(() =>
	import('./CompaniesListPage').then((module) => ({
		default: module.CompaniesListPage,
	}))
);

const CompaniesListPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyCompaniesListPage {...props} />
		</Suspense>
	);
};

// Вспомогательная функция для проверки сортировки для компаний
function validateCompanySortBy(
	value: string | null
): 'registrationDate' | 'closedTasks' | 'fundsHelped' | 'name' | undefined {
	const validSortBy: (
		| 'registrationDate'
		| 'closedTasks'
		| 'fundsHelped'
		| 'name'
	)[] = ['registrationDate', 'closedTasks', 'fundsHelped', 'name'];
	return validSortBy.includes(
		value as 'registrationDate' | 'closedTasks' | 'fundsHelped' | 'name'
	)
		? (value as 'registrationDate' | 'closedTasks' | 'fundsHelped' | 'name')
		: undefined;
}
async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);

	const filters: CompanyFilter = {
		helpType: validateHelpType(url.searchParams.get('helpType')), // Проверка фильтра "Чем помочь?"
		search: url.searchParams.get('search') || undefined,
		sortBy: validateCompanySortBy(url.searchParams.get('sortBy')), // Проверка сортировки
		offset: parseInteger(url.searchParams.get('offset')), // Преобразование в число
		limit: parseInteger(url.searchParams.get('limit')),
	};

	const companies = await getCompaniesWithFilter(filters); // Мок API для получения компаний с фильтрами
	return { companies };
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <CompaniesListPage />,
};
