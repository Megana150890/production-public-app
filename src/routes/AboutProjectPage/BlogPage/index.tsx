import { getActualItems } from '@/api/getActualItems';
import { getProjectNews } from '@/api/getNews';
import { getVolunteersOfTheMonth } from '@/api/getVolunteersOfTheMonth';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyBlogPage = lazy(() =>
	import('./BlogPage').then((module) => ({
		default: module.BlogPage,
	}))
);

const BlogPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyBlogPage {...props} />
		</Suspense>
	);
};

// Загружаем данные для текущей категории
async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const tab = url.searchParams.get('tab') || 'blog'; // По умолчанию 'blog'
	const limit = parseInt(url.searchParams.get('limit') || '10', 10);
	const offset = parseInt(url.searchParams.get('offset') || '0', 10);

	// Загружаем данные о волонтерах месяца и актуальных статьях
	const [news, volunteers, actualItems] = await Promise.all([
		getProjectNews({ limit, offset, category: tab as 'blog' | 'webinars' }),
		getVolunteersOfTheMonth(), // Получаем список волонтеров месяца
		getActualItems(), // Получаем актуальные статьи
	]);

	return { news, tab, volunteers, actualItems };
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	element: <BlogPage />,
};
