import clsx from 'clsx';
import styles from './DocumentsPage.module.scss';

export type DocumentsPageProps = {
	className?: string;
};

export function DocumentsPage({ className }: DocumentsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="DocumentsPage"
		>
			DocumentsPage
		</div>
	);
}
