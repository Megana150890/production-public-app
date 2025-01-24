import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './ReviewsPage.module.scss';

export type ReviewsPageProps = {
	className?: string;
};

export function ReviewsPage({ className }: ReviewsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="ReviewsPage"
		>
			ReviewsPage
			<nav className="menu">
				<Link to="about_foundations">ReviewsAboutFoundationsPage</Link>
				<Link to="about_volunteers">ReviewsAboutVolunteersPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
