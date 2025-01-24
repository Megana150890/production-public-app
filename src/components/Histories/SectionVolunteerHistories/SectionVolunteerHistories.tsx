import clsx from "clsx";
import styles from './SectionVolunteerHistories.module.scss';
import { Button } from '@charitypro/ui-kit';
import arrowRight from '@/assets/icon_arrow_path.svg'
import { IStoryCard } from "../types";

export type SectionVolunteerHistoriesProps = {
  className?: string;
  volunteerCardsData: IStoryCard[];
  onClick: () => void;
};



function CardLeft(storyCardProps: IStoryCard) {
  return (
    <section className={styles.content}>
      <div className={styles.userInfo}>
        <img src={storyCardProps.image} className={styles.image} alt="Аватар" />
        <div className={styles.data}>
          <p className={styles.userName}>
            {storyCardProps.name} {storyCardProps.surname}
          </p>
          <p className={styles.category}>{storyCardProps.category}</p>
        </div>
      </div>
      <div className={styles.cloud}>
        <p className={styles.info}>{storyCardProps.info}</p>
        <p className={styles.description}>{storyCardProps.description}</p>
        <a href={storyCardProps.link} className={styles.linkWrapper}>
          <p className={styles.linkText}>Читать полностью</p>
          <img className={styles.arrowRight} src={arrowRight} alt="Стрелка вправо"/>
        </a>
      </div>
    </section>
  );
};

function CardRight(storyCardProps: IStoryCard) {
  return (
  <section className={styles.content}>
    <div className={styles.cloud}>
      <p className={styles.info}>{storyCardProps.info}</p>
      <p className={styles.description}>{storyCardProps.description}</p>
      <a href={storyCardProps.link} className={styles.linkWrapper}>
          <p className={styles.linkText}>Читать полностью</p>
          <img className={styles.arrowRight} src={arrowRight} alt="Стрелка вправо"/>
        </a>
    </div>
    <div className={styles.userInfo}>
      <img src={storyCardProps.image} className={styles.image} alt="Аватар" />
      <div className={styles.dataRight}>
        <p className={styles.userName}>
          {storyCardProps.name} {storyCardProps.surname}
        </p>
        <p className={styles.category}>{storyCardProps.category}</p>
      </div>
    </div>
  </section>
  );	
}

export function SectionVolunteerHistories({ className, volunteerCardsData, onClick }: SectionVolunteerHistoriesProps) {
  return <div className={clsx(styles.container, className)} data-testid="SectionVolunteerHistories">
    <div className={styles.box}>
      <h2 className={styles.title}>Истории волонтёров</h2>
      <div className={styles.cardContainer}>
        <CardLeft	{...volunteerCardsData[0]}/>
        <CardRight	{...volunteerCardsData[1]}/>
      </div>
      <Button onClick={onClick}>
        Присоединиться
      </Button>
    </div>
  </div>;
}
