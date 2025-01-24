import clsx from 'clsx';
import styles from './FoundationsListPage.module.scss';

export type FoundationsListPageProps = {
	className?: string;
};

export function FoundationsListPage({ className }: FoundationsListPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="FoundationsListPage"
		>
			FoundationsListPage
		</div>
	);
}
