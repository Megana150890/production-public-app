import clsx from 'clsx';
import styles from './ReviewsAboutFoundationsPage.module.scss';

export type ReviewsAboutFoundationsPageProps = {
	className?: string;
};

export function ReviewsAboutFoundationsPage({
	className,
}: ReviewsAboutFoundationsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="ReviewsAboutFoundationsPage"
		>
			ReviewsAboutFoundationsPage
		</div>
	);
}
