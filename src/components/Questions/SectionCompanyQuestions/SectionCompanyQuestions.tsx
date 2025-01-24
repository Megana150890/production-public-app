import clsx from "clsx";
import styles from './SectionCompanyQuestions.module.scss';
import rightArrow from '@/assets/icon_arrow_right.svg'
import { FAQCardProps } from "../types";

export type SectionCompanyQuestionsProps = {
  className?: string;
  companyFaqCardProps: FAQCardProps[];
};

export function SectionCompanyQuestions({ className, companyFaqCardProps }: SectionCompanyQuestionsProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionCompanyQuestions">
    <div className={styles.box}>
      <h1 className={styles.title}>Нас часто спрашивают</h1>
      <ul className={styles.list}>
        {companyFaqCardProps.map((prop, index) => (
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
