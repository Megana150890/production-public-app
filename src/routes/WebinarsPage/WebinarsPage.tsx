import clsx from 'clsx';
import styles from './WebinarsPage.module.scss';

export type WebinarsPageProps = {
	className?: string;
};

export function WebinarsPage({ className }: WebinarsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="WebinarsPage"
		>
			WebinarsPage
		</div>
	);
}
