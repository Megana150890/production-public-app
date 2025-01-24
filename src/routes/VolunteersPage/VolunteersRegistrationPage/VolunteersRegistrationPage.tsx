import clsx from 'clsx';
import styles from './VolunteersRegistrationPage.module.scss';

export type VolunteersRegistrationPageProps = {
	className?: string;
};

export function VolunteersRegistrationPage({
	className,
}: VolunteersRegistrationPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="VolunteersRegistrationPage"
		>
			VolunteersRegistrationPage
		</div>
	);
}
