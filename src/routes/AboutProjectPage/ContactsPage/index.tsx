import React, { lazy, Suspense } from 'react';
import {
	ActionFunctionArgs,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';
import { mockContacts } from './mock';

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
			<LazyContactsPage {...props} contacts={data.contacts} />
		</Suspense>
	);
};

// Функция loader, которая будет возвращать моковые данные
async function loader({ params, request }: LoaderFunctionArgs) {
	return Promise.resolve({
		contacts: mockContacts,
	});
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
