import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs } from 'react-router';
import {
	CompanyRequest,
	postCompanyRequest,
} from '@/api/postCompanyRequest.ts';

const LazyCompaniesPage = lazy(() =>
	import('./CompaniesPage').then((module) => ({
		default: module.CompaniesPage,
	}))
);

const CompaniesPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyCompaniesPage {...props} />
		</Suspense>
	);
};

async function action({ request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as CompanyRequest;
	return postCompanyRequest(payload); // вызов к апи
}

export default {
	action,
	element: <CompaniesPage />,
};
