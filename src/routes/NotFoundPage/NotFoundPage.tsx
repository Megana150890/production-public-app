import clsx from 'clsx';
import styles from './NotFoundPage.module.scss';

export type NotFoundPageProps = {
	className?: string;
};

export function NotFoundPage({ className }: NotFoundPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="NotFoundPage"
		>
			NotFoundPage
		</div>
	);
}
