import { getTaskComments } from '@/api/getTaskComments';
import { getTaskDetails } from '@/api/getTaskDetails';
import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router';

const LazyTaskDetailsPage = lazy(() =>
	import('./TaskDetailsPage').then((module) => ({
		default: module.TaskDetailsPage,
	}))
);

const TaskDetailsPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	//здесь подключение данных
	return (
		<Suspense fallback={null}>
			<LazyTaskDetailsPage {...props} />
		</Suspense>
	);
};

async function loader({ params }: LoaderFunctionArgs) {
	const taskId = params.id;
	if (!taskId) {
		throw new Error('Task ID is required');
	}

	// Вызов мок API для получения детальной задачи
	const taskDetails = await getTaskDetails(taskId);
	const comments = await getTaskComments(taskId);

	return { taskDetails, comments };
}

async function action({ params, request }: ActionFunctionArgs) {
	return null; // вызов к апи
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <TaskDetailsPage />,
};
