import clsx from 'clsx';
import styles from './TeamPage.module.scss';

export type TeamPageProps = {
	className?: string;
};

export function TeamPage({ className }: TeamPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="TeamPage">
			TeamPage
		</div>
	);
}
