import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';
import {
	getSearchResults,
	SearchCategory,
} from '@/api/getSearchResults.ts';

const LazySearchPage = lazy(() =>
	import('./SearchPage').then((module) => ({
		default: module.SearchPage,
	}))
);

const SearchPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazySearchPage {...props} />
		</Suspense>
	);
};

async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const searchTerm = url.searchParams.get('q') ?? undefined;
	const category = (url.searchParams.get('in') ?? 'help') as SearchCategory;
	const results = await getSearchResults(category, searchTerm);
	return results.items; // тут будет вызов к апи исходя из данных запроса
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	element: <SearchPage />,
};
