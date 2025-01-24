import clsx from 'clsx';
import styles from './BlogPage.module.scss';

export type BlogPageProps = {
	className?: string;
};

export function BlogPage({ className }: BlogPageProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="BlogPage">
			BlogPage
		</div>
	);
}
