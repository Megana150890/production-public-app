import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './CompaniesPage.module.scss';

export type CompaniesPageProps = {
	className?: string;
};

export function CompaniesPage({ className }: CompaniesPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="CompaniesPage"
		>
			CompaniesPage
			<nav className="menu">
				<Link to="new?invite=">CompanyRegistrationPage</Link>
				<Link to=":slug">CompanyDetailsPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
