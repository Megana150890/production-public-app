import clsx from 'clsx';
import { Link, Outlet } from 'react-router';
import styles from './AboutProjectPage.module.scss';

export type AboutProjectPageProps = {
	className?: string;
};

export function AboutProjectPage({ className }: AboutProjectPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="AboutProjectPage"
		>
			AboutProjectPage
			<nav className="menu">
				<Link to="team">TeamPage</Link>
				<Link to="events">BlogPage</Link>
				<Link to="documents_and_requisites">DocumentsPage</Link>
				<Link to="partners">PartnersPage</Link>
				<Link to="contacts">ContactsPage</Link>
				<Link to="donation">DonationPage</Link>
				<Link to="volunteers_list">VolunteersListPage</Link>
				<Link to="foundations_list">FoundationsListPage</Link>
				<Link to="company_list">CompaniesListPage</Link>
			</nav>
			<Outlet />
		</div>
	);
}
