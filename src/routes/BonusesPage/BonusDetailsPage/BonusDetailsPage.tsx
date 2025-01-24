import clsx from 'clsx';
import styles from './BonusDetailsPage.module.scss';

export type BonusDetailsPageProps = {
	className?: string;
};

export function BonusDetailsPage({ className }: BonusDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="BonusDetailsPage"
		>
			BonusDetailsPage
		</div>
	);
}
