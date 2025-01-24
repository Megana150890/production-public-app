import clsx from 'clsx';
import styles from './RegistrationPage.module.scss';

export type RegistrationPageProps = {
	className?: string;
};

export function RegistrationPage({ className }: RegistrationPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="RegistrationPage"
		>
			RegistrationPage
		</div>
	);
}
