import clsx from 'clsx';
import styles from './LegalPage.module.scss';

export type LegalPageProps = {
	className?: string;
};

export function LegalPage({ className }: LegalPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="LegalPage">
			LegalPage
		</div>
	);
}
