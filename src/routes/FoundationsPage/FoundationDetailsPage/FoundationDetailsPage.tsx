import clsx from 'clsx';
import styles from './FoundationDetailsPage.module.scss';

export type FoundationDetailsPageProps = {
	className?: string;
};

export function FoundationDetailsPage({
	className,
}: FoundationDetailsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="FoundationDetailsPage"
		>
			FoundationDetailsPage
		</div>
	);
}
