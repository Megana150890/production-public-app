import clsx from 'clsx';
import styles from './CompaniesListPage.module.scss';

export type CompaniesListPageProps = {
	className?: string;
};

export function CompaniesListPage({ className }: CompaniesListPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="CompaniesListPage"
		>
			CompaniesListPage
		</div>
	);
}
