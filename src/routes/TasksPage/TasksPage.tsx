import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './TasksPage.module.scss';

export type TasksPageProps = {
	className?: string;
};

export function TasksPage({ className }: TasksPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="TasksPage">
			TasksPage
			<nav className="menu">
				<Link to=":id">TaskDetailsPage</Link>
				<Link to="archive">TasksArchivePage</Link>
				<Link to="in_progress">TasksInProgressPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
