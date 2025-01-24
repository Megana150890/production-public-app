import clsx from 'clsx';
import styles from './ContentDetailsPage.module.scss';

export type ContentDetailsPageProps = {
	className?: string;
};

export function ContentDetailsPage({ className }: ContentDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="ContentDetailsPage"
		>
			ContentDetailsPage
		</div>
	);
}
