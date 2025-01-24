import clsx from 'clsx';
import styles from './FaqPage.module.scss';

export type FaqPageProps = {
	className?: string;
};

export function FaqPage({ className }: FaqPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="FaqPage">
			FaqPage
		</div>
	);
}
