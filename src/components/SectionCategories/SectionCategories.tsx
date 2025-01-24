import clsx from "clsx";
import styles from './SectionCategories.module.scss';

export type SectionCategoriesProps = {
	className?: string;
};

export function SectionCategories({ className }: SectionCategoriesProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionCategories">
		SectionCategories
	</div>;
}
