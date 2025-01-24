import clsx from 'clsx';
import styles from './VolunteersListPage.module.scss';

export type VolunteersListPageProps = {
	className?: string;
};

export function VolunteersListPage({ className }: VolunteersListPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="VolunteersListPage"
		>
			VolunteersListPage
		</div>
	);
}
