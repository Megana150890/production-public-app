import clsx from "clsx";
import styles from './SectionCompanyHistories.module.scss';
import { IStoryCard } from "../types";

export type SectionCompanyHistoriesProps = {
  className?: string;
  companyCardsData: IStoryCard[];
};

function CardLeftCompany(storyCardProps: IStoryCard) {
  return (
    <section className={styles.content}>
      <div className={styles.userInfo}>
        <img src={storyCardProps.image} className={styles.image} alt="Аватар" />
        <div className={styles.data}>
          <p className={styles.userName}>
            {storyCardProps.name}
          </p>
          <p className={styles.category}>{storyCardProps.category}</p>
        </div>
      </div>
      <div className={styles.cloud}>
        <p className={styles.description}>{storyCardProps.description}</p>
      </div>
    </section>
  );
};

function CardRightCompany(storyCardProps: IStoryCard) {
  return (
  <section className={styles.content}>
    <div className={styles.cloud}>
      <p className={styles.description}>{storyCardProps.description}</p>
    </div>
    <div className={styles.userInfo}>
      <img src={storyCardProps.image} className={styles.image} alt="Аватар" />
      <div className={styles.dataRight}>
        <p className={styles.userName}>
          {storyCardProps.name}
        </p>
        <p className={styles.category}>{storyCardProps.category}</p>
      </div>
    </div>
  </section>
  );	
}

export function SectionCompanyHistories({ className, companyCardsData }: SectionCompanyHistoriesProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionCompanyHistories">
    <div className={styles.box}>
      <h2 className={styles.title}>Компании о нас</h2>
      <div className={styles.cardContainer}>
        <CardLeftCompany	{...companyCardsData[0]}/>
        <CardRightCompany	{...companyCardsData[1]}/>
      </div>
    </div>	
  </div>;
}
