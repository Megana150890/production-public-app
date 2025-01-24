import clsx from "clsx";
import styles from './SectionHowToFund.module.scss';
import { Button } from "@charitypro/ui-kit";
import { DataHowToWorkStep } from "../types";

export type SectionHowToFundProps = {
	className?: string;
	nkoDataHowToWorkSteps: DataHowToWorkStep[];
	onClick: () => void;
};

export function SectionHowToFund({ className, nkoDataHowToWorkSteps, onClick }: SectionHowToFundProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionHowToFund">
		<div className={styles.wrap}>
		<h1 className={styles.title}>Как это работает</h1>
				<ul	className={styles.workStepList}>
					{nkoDataHowToWorkSteps.map((card, index) => (
						<li key={index}>
							<div className={styles.stepSection}>
									<p className={styles.stepCount}>{card.countStep}</p>
									<img src={card.icon} alt={card.text} className={styles.stepIcon} />
								</div>
								<p className={styles.stepText}>{card.text}</p>
						</li>
					))
					}
				</ul>
			<Button onClick={onClick}>
        	Присоединиться
      </Button>
		</div>	
	</div>;
}
