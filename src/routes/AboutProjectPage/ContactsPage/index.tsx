import React, { lazy, Suspense } from 'react';
import {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';

import mock from './mock';

const LazyContactsPage = lazy(() =>
	import('./ContactsPage').then((module) => ({
		default: module.ContactsPage,
	}))
);

const ContactsPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyContactsPage {...props} data={data} />
		</Suspense>
	);
};

// Функция loader, которая будет возвращать моковые данные
async function loader({ params, request }: LoaderFunctionArgs) {
	const { contacts } = await Promise.resolve(mock.data);
	return { contacts };
}

async function action({ request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <ContactsPage />,
};
