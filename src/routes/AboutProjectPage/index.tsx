import { getDocuments } from '@/api/getDocuments';
import { getProjectNews } from '@/api/getNews';
import { getTeamMembers } from '@/api/getTeamMembers';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyAboutProjectPage = lazy(() =>
	import('./AboutProjectPage').then((module) => ({
		default: module.AboutProjectPage,
	}))
);

const AboutProjectPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyAboutProjectPage {...props} />
		</Suspense>
	);
};

async function loader({ request }: LoaderFunctionArgs) {
	// Используем Promise.all для параллельной загрузки данных
	const url = new URL(request.url);
	const tabMembers = url.searchParams.get('tab') as
		| 'procharity'
		| 'development'
		| 'volunteers'
		| null;
	const limit = url.searchParams.get('limit')
		? Number(url.searchParams.get('limit'))
		: undefined;
	const offset = url.searchParams.get('offset')
		? Number(url.searchParams.get('offset'))
		: undefined;

	const [news, teamMembers, documents] = await Promise.all([
		getProjectNews(), // Загружаем новости
		getTeamMembers({ tab: tabMembers || undefined, limit, offset }),
		getDocuments(),
	]);

	return { news, teamMembers, documents };
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <AboutProjectPage />,
};
