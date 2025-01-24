import { getNewsDetails } from '@/api/getNewsDetails';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyContentDetailsPage = lazy(() =>
	import('./ContentDetailsPage').then((module) => ({
		default: module.ContentDetailsPage,
	}))
);

const ContentDetailsPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyContentDetailsPage {...props} />
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	const slug = params.slug; // Получаем ID новости из параметров маршрута
	if (!slug) {
		throw new Error('News ID is required');
	}

	const newsDetails = await getNewsDetails(slug);
	return { newsDetails };
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <ContentDetailsPage />,
};
