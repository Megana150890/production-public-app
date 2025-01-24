import clsx from 'clsx';
import styles from './DonationPage.module.scss';

export type DonationPageProps = {
	className?: string;
};

export function DonationPage({ className }: DonationPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="DonationPage"
		>
			DonationPage
		</div>
	);
}
