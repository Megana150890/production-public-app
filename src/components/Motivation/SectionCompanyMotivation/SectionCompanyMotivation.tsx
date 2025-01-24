import clsx from "clsx";
import styles from './SectionCompanyMotivation.module.scss';

export type SectionCompanyMotivationProps = {
	className?: string;
};

export function SectionCompanyMotivation({ className }: SectionCompanyMotivationProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionCompanyMotivation">
		SectionCompanyMotivation
	</div>;
}
