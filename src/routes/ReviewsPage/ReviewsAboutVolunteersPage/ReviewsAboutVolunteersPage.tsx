import clsx from 'clsx';
import styles from './ReviewsAboutVolunteersPage.module.scss';

export type ReviewsAboutVolunteersPageProps = {
	className?: string;
};

export function ReviewsAboutVolunteersPage({
	className,
}: ReviewsAboutVolunteersPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="ReviewsAboutVolunteersPage"
		>
			ReviewsAboutVolunteersPage
		</div>
	);
}
