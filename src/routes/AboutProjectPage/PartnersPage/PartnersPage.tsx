import clsx from 'clsx';
import styles from './PartnersPage.module.scss';

export type PartnersPageProps = {
	className?: string;
};

export function PartnersPage({ className }: PartnersPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="PartnersPage"
		>
			PartnersPage
		</div>
	);
}
