import clsx from "clsx";
import styles from './SectionVolunteerQuestions.module.scss';
import rightArrow from '@/assets/icon_arrow_right.svg'
import { FAQCardProps } from "../types";

export type SectionVolunteerQuestionsProps = {
  className?: string;
  faqCardProps: FAQCardProps[]; 
};

export function SectionVolunteerQuestions({ className,  faqCardProps}: SectionVolunteerQuestionsProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionVolunteerQuestions">
      <div className={styles.box}>
        <h1 className={styles.title}>Нас часто спрашивают</h1>
        <ul className={styles.list}>
          {faqCardProps.map((prop, index) => (
            <li className={styles.cardElement} onClick={prop.handleCardClick} key={index}>
              <h4 className={styles.cardTitle}>{prop.title}</h4>
              <div className={styles.cardSection}>
                <p className={styles.cardDescription}>{prop.description}</p>
                <img src={rightArrow} alt={prop.alt} className={styles.cardIcon} />
              </div>
            </li>
          ))}
        </ul>
      </div>
  </div>;
}
