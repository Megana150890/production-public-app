import clsx from "clsx";
import styles from './SectionFundHistories.module.scss';
import { Button } from "@charitypro/ui-kit";
import { IStoryCard } from "../types";

export type SectionFundHistoriesProps = {
	className?: string;
	nkoCardsData: IStoryCard[];
  onClick: () => void;
};

function CardLeftNKO(storyCardProps: IStoryCard) {
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
        <p className={styles.info}>{storyCardProps.info}</p>
        <p className={styles.description}>{storyCardProps.description}</p>
      </div>
    </section>
  );
};

function CardRightNKO(storyCardProps: IStoryCard) {
  return (
  <section className={styles.content}>
    <div className={styles.cloud}>
      <p className={styles.info}>{storyCardProps.info}</p>
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

export function SectionFundHistories({ className, nkoCardsData, onClick }: SectionFundHistoriesProps) {
	return <div className={clsx(styles.container, className)} data-testid="SectionFundHistories">
    <div className={styles.box}>
      <h2 className={styles.title}>НКО о нас</h2>
      <div className={styles.cardContainer}>
        <CardLeftNKO	{...nkoCardsData[0]}/>
        <CardRightNKO	{...nkoCardsData[1]}/>
        <CardLeftNKO	{...nkoCardsData[2]}/>
        <CardRightNKO	{...nkoCardsData[3]}/>
      </div>
      <Button onClick={onClick}>
        Присоединиться
      </Button>
    </div>	
	</div>;
}
