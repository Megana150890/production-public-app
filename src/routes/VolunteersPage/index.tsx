import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyVolunteersPage = lazy(() =>
	import('./VolunteersPage').then((module) => ({
		default: module.VolunteersPage,
	}))
);

const VolunteersPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyVolunteersPage {...props} />
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	return null; // тут будет вызов к апи исходя из данных запроса
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export default {
	loader,
	action,
	element: <VolunteersPage />,
};
