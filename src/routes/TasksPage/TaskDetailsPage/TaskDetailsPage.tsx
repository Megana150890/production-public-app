import clsx from 'clsx';
import styles from './TaskDetailsPage.module.scss';

export type TaskDetailsPageProps = {
	className?: string;
};

export function TaskDetailsPage({ className }: TaskDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="TaskDetailsPage"
		>
			TaskDetailsPage
		</div>
	);
}
