import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './FoundationsPage.module.scss';

export type FoundationsPageProps = {
	className?: string;
};

export function FoundationsPage({ className }: FoundationsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="FoundationsPage"
		>
			FoundationsPage
			<nav className="menu">
				<Link to="new">FoundationsRegistrationPage</Link>
				<Link to=":slug">FoundationDetailsPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
