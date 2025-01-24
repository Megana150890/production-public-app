import clsx from 'clsx';
import styles from './FoundationsRegistrationPage.module.scss';

export type FoundationsRegistrationPageProps = {
	className?: string;
};

export function FoundationsRegistrationPage({
	className,
}: FoundationsRegistrationPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="FoundationsRegistrationPage"
		>
			FoundationsRegistrationPage
		</div>
	);
}
