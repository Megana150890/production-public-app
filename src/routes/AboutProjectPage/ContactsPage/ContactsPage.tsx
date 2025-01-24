import clsx from 'clsx';
import styles from './ContactsPage.module.scss';

export type ContactsPageProps = {
	className?: string;
};

export function ContactsPage({ className }: ContactsPageProps) {
	return (
		<div
			className={clsx(styles.container, className)}
			data-testid="ContactsPage"
		>
			ContactsPage
		</div>
	);
}
