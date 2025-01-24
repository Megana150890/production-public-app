import clsx from 'clsx';
import styles from './TasksInProgressPage.module.scss';

export type TasksInProgressPageProps = {
	className?: string;
};

export function TasksInProgressPage({ className }: TasksInProgressPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="TasksInProgressPage"
		>
			TasksInProgressPage
		</div>
	);
}
