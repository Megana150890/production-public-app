import clsx from 'clsx';
import styles from './TasksArchivePage.module.scss';

export type TasksArchivePageProps = {
	className?: string;
};

export function TasksArchivePage({ className }: TasksArchivePageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="TasksArchivePage"
		>
			TasksArchivePage
		</div>
	);
}
