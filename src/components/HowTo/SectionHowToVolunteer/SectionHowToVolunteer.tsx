import clsx from "clsx";
import styles from './SectionHowToVolunteer.module.scss';
import { Button } from "@charitypro/ui-kit";
import { DataHowToWorkStep } from "../types";

export type SectionHowToVolunteerProps = {
  className?: string;
  volunteerDataHowToWorkSteps: DataHowToWorkStep[];
	onClick: () => void;
};

export function SectionHowToVolunteer({ className, volunteerDataHowToWorkSteps, onClick }: SectionHowToVolunteerProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionHowToVolunteer">
    <div className={styles.wrap}>
    <h1 className={styles.title}>Стать волонтером легко</h1>
        <ul	className={styles.workStepList}>
          {volunteerDataHowToWorkSteps.map((card, index) => (
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
