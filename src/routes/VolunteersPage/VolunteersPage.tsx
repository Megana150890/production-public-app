import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './VolunteersPage.module.scss';

export type VolunteersPageProps = {
	className?: string;
};

export function VolunteersPage({ className }: VolunteersPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="VolunteersPage"
		>
			VolunteersPage
			<nav className="menu">
				<Link to="new">VolunteersRegistrationPage</Link>
				<Link to=":id">VolunteerDetailsPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
