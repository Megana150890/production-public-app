import clsx from "clsx";
import styles from './SectionSearch.module.scss';

export type SectionSearchProps = {
	className?: string;
};

export function SectionSearch({ className }: SectionSearchProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionSearch">
		SectionSearch
	</div>;
}
