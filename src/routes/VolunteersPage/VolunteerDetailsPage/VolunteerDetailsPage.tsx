import clsx from 'clsx';
import styles from './VolunteerDetailsPage.module.scss';

export type VolunteerDetailsPageProps = {
	className?: string;
};

export function VolunteerDetailsPage({ className }: VolunteerDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="VolunteerDetailsPage"
		>
			VolunteerDetailsPage
		</div>
	);
}
