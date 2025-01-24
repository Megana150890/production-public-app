import clsx from 'clsx';
import styles from './NewsPage.module.scss';

export type NewsPageProps = {
	className?: string;
};

export function NewsPage({ className }: NewsPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="NewsPage">
			NewsPage
		</div>
	);
}
