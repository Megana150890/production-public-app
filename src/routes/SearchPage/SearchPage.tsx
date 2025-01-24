import clsx from 'clsx';
import styles from './SearchPage.module.scss';

export type SearchPageProps = {
	className?: string;
};

export function SearchPage({ className }: SearchPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="SearchPage">
			SearchPage
		</div>
	);
}
