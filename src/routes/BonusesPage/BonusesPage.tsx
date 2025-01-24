import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './BonusesPage.module.scss';

export type BonusesPageProps = {
	className?: string;
};

export function BonusesPage({ className }: BonusesPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="BonusesPage"
		>
			BonusesPage
			<nav className="menu">
				<Link to=":id">BonusDetailsPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
