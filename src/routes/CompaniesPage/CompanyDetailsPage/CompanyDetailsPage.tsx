import clsx from 'clsx';
import styles from './CompanyDetailsPage.module.scss';

export type CompanyDetailsPageProps = {
	className?: string;
};

export function CompanyDetailsPage({ className }: CompanyDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="CompanyDetailsPage"
		>
			CompanyDetailsPage
		</div>
	);
}
