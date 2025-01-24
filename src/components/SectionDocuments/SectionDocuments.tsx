import clsx from "clsx";
import styles from './SectionDocuments.module.scss';

export type SectionDocumentsProps = {
	className?: string;
};

export function SectionDocuments({ className }: SectionDocumentsProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionDocuments">
		SectionDocuments
	</div>;
}
