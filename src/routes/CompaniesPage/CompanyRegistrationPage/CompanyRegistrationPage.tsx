import clsx from 'clsx';
import styles from './CompanyRegistrationPage.module.scss';

export type CompanyRegistrationPageProps = {
	className?: string;
};

export function CompanyRegistrationPage({
	className,
}: CompanyRegistrationPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="CompanyRegistrationPage"
		>
			CompanyRegistrationPage
		</div>
	);
}
