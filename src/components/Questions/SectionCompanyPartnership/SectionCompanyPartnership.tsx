import clsx from "clsx";
import styles from './SectionCompanyPartnership.module.scss';
import { FAQCardProps } from "../types";

export type SectionCompanyPartnershipProps = {
  className?: string;
  companyPartnershipCardProps: FAQCardProps[];
};

export function SectionCompanyPartnership({ className, companyPartnershipCardProps }: SectionCompanyPartnershipProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionCompanyPartnership">
    <div className={styles.box}>
      <h1 className={styles.title}>Форматы партнерства</h1>
      <ul className={styles.list}>
        {companyPartnershipCardProps.map((prop, index) => (
          <li className={styles.cardElement} onClick={prop.handleCardClick} key={index}>
            <h4 className={styles.cardTitle}>{prop.title}</h4>
            <p className={styles.cardDescription}>{prop.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>;
}
