import { getHomePageStats } from '@/api/getHomePageStats.ts';
import { getPartners } from '@/api/getPartners';
import { getTaskCategories } from '@/api/getTaskCategories.ts';
import { AuthRequest, postAuthRequest } from '@/api/postAuthRequest';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs, useLoaderData, Await } from 'react-router';
import { LoaderData } from '@/routes/PublicRoot/loaderData.tsx';

const LazyPublicRoot = lazy(() =>
	import('./PublicRoot').then((module) => ({ default: module.PublicRoot }))
);

const PublicRoot = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	const data = useLoaderData<typeof loader>();
	return (
		<Suspense fallback={null}>
			<Await resolve={data}>
				<LazyPublicRoot {...props} data={data} />
			</Await>
		</Suspense>
	);
};

async function loader({ request }: LoaderFunctionArgs): Promise<LoaderData> {
	const url = new URL(request.url);
	const tabPartners = url.searchParams.get('tab') as
		| 'companies'
		| 'volunteers'
		| 'nko'
		| null;
	const limit = url.searchParams.get('limit')
		? Number(url.searchParams.get('limit'))
		: undefined;
	const offset = url.searchParams.get('offset')
		? Number(url.searchParams.get('offset'))
		: undefined;

	const [stats, taskCategories, partners] = await Promise.all([
		getHomePageStats(),
		getTaskCategories(),
		getPartners({ tab: tabPartners || undefined, limit, offset }),
	]);
	return { stats, taskCategories, partners };
}

async function authAction({ request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as AuthRequest;

	try {
		await postAuthRequest(payload);
		return { success: true };
	} catch (error) {
		console.error(error);
		return { success: false, message: (error instanceof Error) ? error.message : String(error) };
	}
}

export default {
	loader,
	action: authAction,
	element: <PublicRoot />,
};
