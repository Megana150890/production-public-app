import clsx from "clsx";
import styles from './SectionPartners.module.scss';

export type SectionPartnersProps = {
	className?: string;
};

export function SectionPartners({ className }: SectionPartnersProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionPartners">
		SectionPartners
	</div>;
}
